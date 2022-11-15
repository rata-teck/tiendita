import { NgModule, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {DatosService} from './../../servicios/datos.service';
import { IonicModule } from '@ionic/angular';

import { AuthPageRoutingModule } from './auth-routing.module';

import { AuthPage } from './auth.page';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    EventEmitter
  ],
  declarations: [
    AuthPage,
    LoginComponent,
    RegisterComponent
  ],
  providers:[
    DatosService
  ]
})
export class AuthPageModule {}
