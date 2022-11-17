import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {Producto} from './../../../modelos/producto';
import {InfiniteScrollCustomEvent} from '@ionic/angular';

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

  @Output()
  public muestraMas = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  public detalles(id : number): void{
    this.irADetalles.emit(id);
  }

  onIonInfinite(ev : any) {
    this.muestraMas.emit();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }
}
