import { Component, OnInit, Input } from '@angular/core';
import {Carrito} from './../../../modelos/carrito';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  @Input()
  public carrito! : Carrito;

  constructor() { }

  ngOnInit() {}

}
