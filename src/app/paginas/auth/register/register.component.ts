import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormBuilder} from '@angular/forms';
import {Usuario} from './../../../modelos/usuario';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  public fb = new FormBuilder;

  public formulario? : any;

  private usuario? : Usuario;

  @Output()
  private enviarUsuario = new EventEmitter<Usuario>();

  @Output()
  private hola = new EventEmitter();

  constructor(
  ) { }

  ngOnInit() {
    this.formulario = this.fb.group({
      firstName : new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(15)]),
      lastName : new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
      age : new FormControl(0, [Validators.required, Validators.min(18), Validators.max(98)]),
      username : new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
      password : new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
      birthDate : new FormControl(Date.parse('January 1, 1992'), [Validators.required, Validators.min(Date.parse('January 1, 1992')), Validators.max(Date.now() - 86400000)]),
      gender : new FormControl('male', Validators.required)
    });
  }

  public enviar() : void{
    const nuevo = this.formulario.value;
    this.usuario = {
      firstName: nuevo.firstName,
      lastName: nuevo.lastName,
      age: nuevo.age,
      username : nuevo.username,
      password : nuevo.password,
      birthDate : nuevo.birthDate,
      gender : nuevo.gender
    }
    this.enviarUsuario.emit(this.usuario);
  }

  public loginMode(){
    this.hola.emit();
  }


}
