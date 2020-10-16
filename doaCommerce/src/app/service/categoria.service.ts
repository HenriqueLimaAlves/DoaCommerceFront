import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor( private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }

  getAllCategoria() {
    return this.http.get('http://localhost:8080/categorias', this.token)
  }

  getByIdCategoria(id: number) {

    return this.http.get(`http://localhost:8080/categorias/${id}`, this.token)
  }

  postCategoria(categoria: Categoria) {
    return this.http.post('http://localhost:8080/categorias', categoria, this.token)

  }

  putCategoria(categoria: Categoria) {
    return this.http.put('http://localhost:8080/produto-categoria', categoria, this.token)
  }

  deleteCategoria(id: number) {
    return this.http.delete(`http://localhost:8080/produto-categoria/${id}`, this.token)
  }

  getCategoriaByName(categoria: string){
    return this.http.get(`http://localhost:8080/categorias/categoria/${categoria}`, this.token)
  }
}
