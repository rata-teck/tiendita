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

  public producto? : Producto;

  public carrito? : Carrito;

  public section? : number;

  public token : string = '';

  public nombreModo? : string;

  constructor(
    private datos : StoreService,
    private ruta : ActivatedRoute
  ) { }

  ngOnInit() {
    this.token = this.ruta.snapshot.params['token'];
    console.log(this.token);
    this.section = 0;
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
  }

}
