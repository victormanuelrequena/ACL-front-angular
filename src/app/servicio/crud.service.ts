import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddPuesto } from './models/AddPuesto';
import { Estacionar } from './models/Estacionar';
import { Reservar } from './models/Reservar';
import { EstacionarReservado } from './models/EstacionarReservado';
import { Retirar } from './models/Retirar';
import { Cancelacion } from './models/Cancelacion';
import { DeletePuesto } from './models/DeletePuesto';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  API: string = "http://localhost:3000/";
  constructor(private clientHttp:HttpClient) { }

  //Crear Puesto
  AgregarPuesto(dataPuesto:AddPuesto):Observable<any> {
    return this.clientHttp.post(`${this.API}crear`, dataPuesto);
  };

  // Listar Puestos
  ObtenerPuestos() {
    return this.clientHttp.get(this.API);
  };

  // Estacionar vehiculo
  EstacionarVehiculo(idBody:Estacionar):Observable<any> {
    console.log(idBody);
    return this.clientHttp.put(`${this.API}estacionar`, {idBody});
  };

  // RESERVAR PUESTO
  ReservarPuesto(dataReserva:Reservar):Observable<any> {
    console.log(dataReserva);
    return this.clientHttp.put(`${this.API}reservar`, dataReserva);
  };

  // Estacionar vehiculo en un puesto RESERVADO
  EstacionarReservado(dEstacionarReservado:EstacionarReservado):Observable<any> {
    console.log(dEstacionarReservado);
    return this.clientHttp.put(`${this.API}reservado/estacionar`, dEstacionarReservado);
  };

  //Retirar Vehiculo
  RetirarVehiculo(dataRetirar:Retirar) {
    console.log(dataRetirar);
    return this.clientHttp.put(`${this.API}retirar`, dataRetirar);
  };

  //Cancelar Reservacion

  CancelarReservacion(dataCancelacion:Cancelacion) {
    return this.clientHttp.put(`${this.API}reservado/cancelar`, dataCancelacion);
  }

  //Eliminar Puesto

  EliminarPuesto(dataDelete:DeletePuesto):Observable<any> {
    return this.clientHttp.post(`${this.API}eliminar`, dataDelete);
  }

}
