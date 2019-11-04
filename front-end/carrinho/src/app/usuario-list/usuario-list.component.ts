import {HttpClient} from '@angular/common/http';
import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

export interface Usuario{
  id: string;
  nome: string;
  email: string;
}

@Component({
  selector: 'usuario-list',
  styleUrls: ['./usuario-list.component.css'],
  templateUrl: './usuario-list.component.html',
})
export class UsuarioListComponent implements AfterViewInit {
  displayedColumns: string[] = ['nome', 'email'];
  data;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(private router: Router,
              private usuarioService: UsuarioService) {}
  

  ngAfterViewInit() {

    this.usuarioService.findAll().subscribe((data)=> this.data = data);
  }

  novo(){
    this.router.navigateByUrl('/usuario');
  }

  selecionar(id){
    this.router.navigateByUrl(`/usuario/${id}`);
  }
}

