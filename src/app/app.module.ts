import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EstacionamientoComponent } from './components/estacionamiento/estacionamiento.component';
import { PuestoComponent } from './components/puesto/puesto.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    EstacionamientoComponent,
    PuestoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
