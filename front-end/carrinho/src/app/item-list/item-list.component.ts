import {HttpClient} from '@angular/common/http';
import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'item-list',
  styleUrls: ['./item-list.component.css'],
  templateUrl: './item-list.component.html',
})
export class ItemListComponent implements AfterViewInit {
  displayedColumns: string[] = ['nome', 'valor'];
  data;

  constructor(private _httpClient: HttpClient,
              private router: Router) {}
  

  ngAfterViewInit() {
  }

  novo(){
    this.router.navigateByUrl('/item');
  }

  selecionar(id){
    this.router.navigateByUrl(`/item/${id}`);
  }
}
