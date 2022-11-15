import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Usuario} from './../modelos/usuario';
import {Producto} from './../modelos/producto';
import {Carrito} from './../modelos/carrito';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private info = {
    headers : {
      'Content-Type':'application/json'
    }
  }

  constructor(
    private cliente : HttpClient
  ) { }

  public buscarUsuario (username : string, password : string): Observable<any>{
    return this.cliente.post('https://dummyjson.com/auth/login', {"username":username, "password":password}, this.info);
  }
  public registrarUsuario(usuario : Usuario): Observable<any>{
    return this.cliente.post('https://dummyjson.com/users/add', {...usuario}, this.info);
  }
}
