import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent {

  newPuestoForm: FormGroup;
  deletePuesto: FormGroup;

  constructor(
    public formulario:FormBuilder,
    private crudService:CrudService
    ) {
    this.newPuestoForm = this.formulario.group({
      lugar: [''],
      estacionado: ['']
    });

    this.deletePuesto = this.formulario.group({
      puesto: ['']
    });

  }

  crearPuesto():any {
    console.log('Me presionaste');
    console.log(this.newPuestoForm.value);
    this.crudService.AgregarPuesto(this.newPuestoForm.value).subscribe();
  };

  eliminarPuesto():any {
    this.crudService.EliminarPuesto(this.deletePuesto.value.puesto).subscribe();
  };

   // MOSTRAR/OCULTAR MODAL DE RESERVACION
  showModalReserve() {
    const reserveModal:any = document.querySelector('.modal-reservar');
    reserveModal.classList.toggle('modal-on');
  }


}
