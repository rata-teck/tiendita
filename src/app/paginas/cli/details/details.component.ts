import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Producto} from './../../../modelos/producto';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {

  @Input()
  public producto! : Producto;

  public formulario? : any;

  @Output()
  laGarra = new EventEmitter<any>();

  constructor(
    public fb : FormBuilder
  ) { }

  ngOnInit() {
    this.formulario = this.fb.group({
      cantidad : new FormControl(0, [Validators.required, Validators.min(1), Validators.max(this.producto.stock)])
    });
  }

  public laGarraSeMueve(){
    const adiosAmigo = {
      id : this.producto?.id,
      cantidad : this.formulario.value.cantidad
    }
    this.laGarra.emit(adiosAmigo); //Me voy a un lugar mejor ;)
  }

}
