import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Usuario{
  id: String;
  nome: String;
  email: String;
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:4200/api';

  findAll(){
    return this.http.get(`${this.url}/usuarios`);
  }

  findById(id){
    return this.http.get(`${this.url}/usuarios/${id}`);
  }

  save(usuario){
    return this.http.post(`${this.url}/usuarios`,usuario);
  }

  update(usuario){
    return this.http.put(`${this.url}/usuarios`,usuario);
  }

  delete(id){
    return this.http.delete(`${this.url}/usuarios/${id}`);
  }
}

