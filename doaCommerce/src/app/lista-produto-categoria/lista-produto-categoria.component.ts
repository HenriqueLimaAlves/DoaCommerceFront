import { ActivatedRoute } from '@angular/router';
import { Categoria } from './../model/Categoria';
import { CategoriaService } from './../service/categoria.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-lista-produto-categoria',
  templateUrl: './lista-produto-categoria.component.html',
  styleUrls: ['./lista-produto-categoria.component.css']
})
export class ListaProdutoCategoriaComponent implements OnInit {

  listaCategoria: Categoria[]
  categoria: Categoria = new Categoria
  categoriaNome: string
  constructor(
    private categoriaService: CategoriaService,
    private route: ActivatedRoute
    
  ) {
   }

  ngOnInit() {
    this.categoriaNome = this.route.snapshot.params['categoria']
    this.findAllCategoriaByNome()
  }

  findAllCategoriaByNome(){
    this.categoriaService.getCategoriaByName(this.categoriaNome).subscribe((resp: Categoria[])=>{
      this.listaCategoria = resp
    })
  }
}
