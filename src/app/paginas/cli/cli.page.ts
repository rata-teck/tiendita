import { Component, OnInit } from '@angular/core';
import {StoreService} from './../../servicios/store.service';
import {ActivatedRoute} from '@angular/router';
import {Producto} from './../../modelos/producto';
import {Carrito} from './../../modelos/carrito';

@Component({
  selector: 'app-cli',
  templateUrl: './cli.page.html',
  styleUrls: ['./cli.page.scss'],
})
export class CliPage implements OnInit {

  public modo? : number;

  public productos? : Producto[];

  public producto! : Producto;

  public carrito? : Carrito;

  public section! : number;

  public token : string = '';

  public usrId : string = ';'

  public nombreModo? : string;

  constructor(
    private datos : StoreService,
    private ruta : ActivatedRoute
  ) { }

  ngOnInit() {
    this.token = this.ruta.snapshot.params['token'];
    this.usrId = this.ruta.snapshot.params["usrid"];
    this.section = 0;
    console.log(this.token);
    this.datos.inicio(this.token, this.section ).subscribe(data => {
      this.productos = data.products;
    });
    this.modo = 1;
    this.nombreModo =  'Home';
  }

  public detalles(id : number) : void{
    this.datos.detalles(this.token, id).subscribe(data => {
      this.producto = {...data}
    });
    this.modo = 3;
    this.nombreModo = 'Details';
  }
  public cambiaModo(nuevo : number) : void{
    this.modo = nuevo;
    if(nuevo == 1){
      this.nombreModo = 'Home';
    }
    else{
      if(nuevo == 3){
        this.nombreModo = 'Details';
      }
    }
  }

  public masProductos() : void{
    this.section = this.section + 30;
    this.datos.inicio(this.token, this.section).subscribe(data => {
      for(let x of data.products){
        this.productos?.push(x);
      }
    });
  }

}
