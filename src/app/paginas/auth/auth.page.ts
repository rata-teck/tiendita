import { Component, OnInit } from '@angular/core';
import {AuthService} from './../../servicios/auth.service';
import {Usuario} from './../../modelos/usuario';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(
    private datos : AuthService,
    private ruta : Router
  ) { }

  private usuario? : Usuario;

  public modo? : number;

  ngOnInit() {
    this.modo = 1;
  }

  public cambiaModo(nuevo : number) : void{
    this.modo = nuevo;
  }

  public iniciarSesion(a1 : any){
    this.datos.buscarUsuario(a1.username, a1.password).subscribe(data => {
      this.ruta.navigateByUrl('/cli/'+data.id+'/'+data.token);
    });
  }
  public registrarse(usr : Usuario) : void{
    this.datos.registrarUsuario(usr).subscribe(data => {
      this.usuario = {...data}
      console.log('2 tacos de '+data.firstName+' a la orden!');
    });
    this.modo = 1;
  }

}
