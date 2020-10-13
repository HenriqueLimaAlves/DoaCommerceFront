import { Categoria } from './../model/Categoria';
import { ProdutoService } from './../service/produto.service';
import { Produto } from './../model/Produto';

import { Component, OnInit } from '@angular/core';

import { CategoriaService } from '../service/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-put-produto',
  templateUrl: './put-produto.component.html',
  styleUrls: ['./put-produto.component.css']
})
export class PutProdutoComponent implements OnInit {

  produto: Produto = new Produto()
  idPost: number

  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]
  idCategoria: number

  constructor(
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(){
    window.scroll(0,0)

    this.idPost = this.route.snapshot.params["id"]
    this.findByIdProduto(this.idPost)


    this.findAllTemas()
  }

  findByIdProduto(id: number) {
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) => {
      this.produto = resp
    })
  }

  salvar(){
    this.categoria.id = this.idCategoria
    this.produto.categoria = this.categoria

    this.produtoService.putProduto(this.produto).subscribe((resp: Produto) => {
      this.produto = resp
      this.router.navigate(['/doe'])
      alert('Produto alterada com sucesso')
    }, err => {
      if (err.status == '500'){
        alert('Preencha todos os campos corretamente antes de enviar!')
      }
    })
  }

  findAllTemas() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp
    })
  }

}
