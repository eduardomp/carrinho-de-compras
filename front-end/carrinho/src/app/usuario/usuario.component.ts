import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  nome: string;
  email: string;

  constructor(private router: Router,
              private usuarioService: UsuarioService) { 

  }

  ngOnInit() {
  }


  salvar(){
    this.usuarioService.save({nome: this.nome, email: this.email})
    .subscribe(
      (data) => console.log(data),
      (error)=> console.log(error),
      () => this.router.navigateByUrl('/usuarios')
    )
  }

  cancelar(){
    this.router.navigateByUrl('/usuarios');
  }
}
