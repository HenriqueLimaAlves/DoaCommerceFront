import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { SaibaMaisComponent } from './saiba-mais/saiba-mais.component';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContatoComponent } from './contato/contato.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { from } from 'rxjs';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoCategoriaComponent } from './produto-categoria/produto-categoria.component';
import { DoeComponent } from './doe/doe.component';


@NgModule({
  declarations: [
    AppComponent,
    SaibaMaisComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ContatoComponent,
    LoginComponent,
    CadastroComponent,
    ProdutoComponent,
    ProdutoCategoriaComponent,
    DoeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
