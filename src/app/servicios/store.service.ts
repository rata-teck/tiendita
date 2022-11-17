import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './../modelos/usuario';
import { Producto } from './../modelos/producto';
import { Carrito } from './../modelos/carrito';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  public token?: string;

  private infoPost() {
    return {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      }
    }
  }

  private infoGet = {
    headers: {
      'Authorization': 'Bearer ' + this.token
    }
  }

  constructor(
    private cliente: HttpClient
  ) { }

  public inicio(tk: string, section: number): Observable<any> {
    this.token = tk;
    return this.cliente.get('https://dummyjson.com/auth/products?skip=' + section, this.infoPost());
  }

  public detalles(tk : string, id : number): Observable<any>{
    return this.cliente.get('https://dummyjson.com/auth/products/'+id, this.infoPost());
  }

  public addCarrito(cart : any) : Observable<any>{
    return this.cliente.post('https://dummyjson.com/auth/carts/add', cart, this.infoPost());
  }

  public verCarrito(id : string) : Observable<any>{
    return this.cliente.get('https://dummyjson.com/auth/users/'+id+'/carts', this.infoPost());
  }

}
