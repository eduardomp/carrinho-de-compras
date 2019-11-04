import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-usuario-detail',
  templateUrl: './usuario-detail.component.html',
  styleUrls: ['./usuario-detail.component.css']
})
export class UsuarioDetailComponent implements OnInit {

  id: string;
  nome: string;
  email: string;

  private routeSub: Subscription;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private usuarioService: UsuarioService) {
        this.nome = "";
        this.email = "";
  }
  
  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.usuarioService.findById(params['id']).subscribe((data)=> {
        console.log(data);
        this.id = params['id'];
        this.nome = data["nome"];
        this.email = data["email"];
      })
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }


  salvar(){
    this.usuarioService.update({id: this.id, nome: this.nome, email: this.email})
    .subscribe(
      (data)=> console.log(data),
      (error)=> console.log(error),
      () =>  this.router.navigateByUrl('/usuarios')
      );
  }


  excluir(){
    this.usuarioService.delete(this.id)
    .subscribe(
      (data)=> console.log(data),
      (error)=> console.log(error),
      () =>  this.router.navigateByUrl('/usuarios')
      );
  }

  cancelar(){
    this.router.navigateByUrl('/usuarios');
  }

}
