import { Produto } from './../model/Produto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  constructor( private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }

  getAllProdutos() {
    return this.http.get('http://localhost:8080/produtos')
  }
  getByIdProduto(id: number) {
    return this.http.get(`http://localhost:8080/produtos/${id}`)
  }
  postProduto(produto: Produto ){
    return this.http.post('http://localhost:8080/produtos', produto)
  }
  putProduto(produto: Produto) {
    return this.http.put('http://localhost:8080/produtos', produto)
  }

  deleteProduto(id: number) {
    return this.http.delete(`http://localhost:8080/produtos/${id}`)
  }

  getProdutoByUrgente(urgente: boolean){
    return this.http.get(`http://localhost:8080/produtos/urgente/${urgente}`)
  }

  getByProdutoCategoria(id: number) {
    return this.http.get(`http://localhost:8080/categorias/${id}`)
  }
}
