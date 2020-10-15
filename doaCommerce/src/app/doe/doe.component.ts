import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';


@Component({
  selector: 'app-doe',
  templateUrl: './doe.component.html',
  styleUrls: ['./doe.component.css']
})
export class DoeComponent implements OnInit {

  produto: Produto = new Produto()
  listaProdutos: Produto[]

  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]
  idCategoria: number

  constructor(
    private produtoService: ProdutoService
  ) { }

  ngOnInit() {
    this.findAllProdutos()
  }

  findAllProdutos() {
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
    })
  }

}
