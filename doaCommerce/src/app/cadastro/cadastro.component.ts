import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuario: Usuario = new Usuario()
  senha: string
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  conferirSenha(event: any) {
    this.senha = event.target.value
  }


  cadastrar(){
  // this.usuario.cpfCpnj=12346567892
  //   this.usuario.idade=20
  //   this.usuario.endereco="rua da doação"
    // this.usuario.tipoPessoa=1
    this.usuario.produto=[]
    this.usuario.produtoDoacao=[]

    if(this.senha === this.usuario.senha){
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) =>{
        this.usuario = resp
        this.router.navigate(['/login'])
        alert('Usuário cadastrado com sucesso')
      })


    }else{
      alert('Digite senhas iguais')
    }

  }
}
