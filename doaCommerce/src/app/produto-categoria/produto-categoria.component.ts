import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../model/Categoria';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-produto-categoria',
  templateUrl: './produto-categoria.component.html',
  styleUrls: ['./produto-categoria.component.css']
})
export class ProdutoCategoriaComponent implements OnInit {

  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]

  constructor(
    private categoriaService: CategoriaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.findAllCategoria()
  }
  findAllCategoria(){
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => { this.listaCategorias = resp})
  }
  
  findByIdCategoria() {
    this.categoriaService.getByIdCategoria(this.categoria.id).subscribe((resp: Categoria) => { this.categoria = resp})
  }

  cadastrar(){
    if (this.categoria.categoria == null) {
      alert ('Preencha o campo corretamente')
    } else {
      this.categoriaService.postCategoria(this.categoria).subscribe((resp: Categoria) => { this.categoria = resp
      this.router.navigate(['/produto'])
      alert('Produto cadastrado com sucesso!')
      })
    }
  }

}
