import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {Producto} from './../../../modelos/producto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  @Input()
  public prods? : Producto[];

  @Output()
  public irADetalles = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {}

  public detalles(id : number): void{
    this.irADetalles.emit(id);
  }

}
