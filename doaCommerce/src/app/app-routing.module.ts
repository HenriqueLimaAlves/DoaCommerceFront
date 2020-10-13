import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProdutoCategoriaComponent } from './produto-categoria/produto-categoria.component';
import { ProdutoComponent } from './produto/produto.component';
import { SaibaMaisComponent } from './saiba-mais/saiba-mais.component';
import { DoeComponent } from './doe/doe.component';

const routes: Routes = [
  { path:'', redirectTo: 'home', pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'contato', component: ContatoComponent},
  { path: 'saiba-mais', component: SaibaMaisComponent},
  { path: 'login', component: LoginComponent},
  { path: 'cadastro', component: CadastroComponent},
  { path: 'produtos', component: ProdutoComponent},
  { path: 'produto-categoria', component: ProdutoCategoriaComponent},
  { path: 'doe', component: DoeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
