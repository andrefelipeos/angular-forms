import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CepService } from '../services/cep.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(
    private router: Router,
    private cepService: CepService
  ) { }

  ngOnInit(): void {
  }

  cadastrar(form: NgForm) {
    if (form.valid) {
      this.router.navigate(["./sucesso"])
    }
  }

  consultarCep(event: any, form: NgForm) {
    const cep: string = event.target.value;
    this.cepService.getCepInfoJson(cep)
      .subscribe(cepInfoJson => this.popularEnderecoNoFormulario(cepInfoJson, form))
  }

  popularEnderecoNoFormulario(dados: any, form: NgForm) {
    form.form.patchValue({
      endereco: dados.logradouro,
      bairro: dados.bairro,
      cidade: dados.localidade,
      complemento: dados.complemento,
      estado: dados.uf
    })
  }

}
