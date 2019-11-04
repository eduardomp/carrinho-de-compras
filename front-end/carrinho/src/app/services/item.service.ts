import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:4200/api';

  findAll(){
    return this.http.get(`${this.url}/items`);
  }

  findById(id){
    return this.http.get(`${this.url}/items/${id}`);
  }

  save(usuario){
    return this.http.post(`${this.url}/items`,usuario);
  }

  update(usuario){
    return this.http.put(`${this.url}/items`,usuario);
  }

  delete(id){
    return this.http.delete(`${this.url}/items/${id}`);
  }
}
