import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-detail',
  templateUrl: './usuario-detail.component.html',
  styleUrls: ['./usuario-detail.component.css']
})
export class UsuarioDetailComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  salvar(){

  }

  excluir(){

  }

  cancelar(){
    this.router.navigateByUrl('/usuarios');
  }

}
