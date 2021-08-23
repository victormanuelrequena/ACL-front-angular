import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/servicio/crud.service';

import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-estacionamiento',
  templateUrl: './estacionamiento.component.html',
  styleUrls: ['./estacionamiento.component.css']
})
export class EstacionamientoComponent implements OnInit {
  Puestos:any;

  insertKey: FormGroup;
  insertDaysReserve: FormGroup;

  saludo="Con esto misko es que voy ha renderizar el modal jaweno";

  constructor(
    public formKey:FormBuilder,
    public insertDays:FormBuilder,
    private crudService:CrudService
    ) {
     this.insertKey = this.formKey.group({
      key:['']
    });
     this.insertDaysReserve = this.insertDays.group({
      days:['']
    });
    }

    // ESTACIONAR VEHICULO
  estacionarVehiculo(idBody:any) {
    this.crudService.EstacionarVehiculo(idBody).subscribe(response => {
      console.log(response)
    });
  };

  // RESERVAR PUESTO
  reservarPuesto(dataReserva:any){
     const dataReserve = {
       idBody: dataReserva.idBody,
       diasDeApartado: this.insertDaysReserve.value.days
     };
   console.log(dataReserve)
   this.crudService.ReservarPuesto(dataReserve).subscribe(response => {
     console.log(response)
    })
  };


  // MOSTRAR/OCULTAR MODAL DE RESERVACION
  showModalReserve() {
    const reserveModal:any = document.querySelector('.modal-reservar');
    reserveModal.classList.toggle('modal-on');
  }

  // ESTACIONAR EN RESERVADO
  estacionarReservado(dEstacionarReservado: any){
    const reserveAuth = {
      idBody: dEstacionarReservado.idBody,
      key: this.insertKey.value.key
    };

    this.crudService.EstacionarReservado(reserveAuth).subscribe(response => {
      console.log(response);
    });
  };

  // Retirar Vehiculo
  retirarVehiculo(dataRetirar:any) {
    this.crudService.RetirarVehiculo(dataRetirar).subscribe(response => {
      console.log(response);
    });
  };

  // Cancelar Reservacion
  cancelarReservacion(dataCancelacion:any) {
    this.crudService.CancelarReservacion(dataCancelacion).subscribe(response => {
      console.log(response);
    });
  }

  ngOnInit(): void {
    this.crudService.ObtenerPuestos().subscribe(response => {
      console.log(response);
      this.Puestos = response;
    });
  }

}
