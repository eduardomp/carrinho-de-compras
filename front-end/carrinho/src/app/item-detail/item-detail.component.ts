import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  salvar(){

  }

  excluir(){

  }

  cancelar(){
    this.router.navigateByUrl('/itens');
  }
}
