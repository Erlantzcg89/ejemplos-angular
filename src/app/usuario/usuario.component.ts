import { Component, OnInit } from '@angular/core';
import { Usuario, Sexo } from '../model/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  usuario : Usuario;

  constructor() {
    console.log('UsuarioComponent constructor');
    this.usuario = new Usuario('Homer');
    this.usuario.apellido = 'Simpson';
    this.usuario.avatar = 'https://vignette.wikia.nocookie.net/simpsons/images/7/7f/Mmm.jpg/revision/latest?cb=20121205194537';
    this.usuario.email = 'homer@homer.com';
    this.usuario.sexo = Sexo.MASCULINO;

  }

  ngOnInit() {
    console.log('UsuarioComponent ngOnInit');
  }

}
