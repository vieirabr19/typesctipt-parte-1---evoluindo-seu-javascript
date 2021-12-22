import { Negociacao } from '../models/negociacao.js';

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;

  constructor(){
    this.inputData = document.querySelector('#data');
    this.inputQuantidade = document.querySelector('#quantidade');
    this.inputValor = document.querySelector('#valor');
  }

  adicionar(): void {
    const negociacao = this.criarNegociacao();
    console.log(negociacao);
    this.imparFormulario();
  }

  criarNegociacao(): Negociacao{
    const exp = /-/g;
    const data = new Date(this.inputData.value.replace(exp, ','));
    const quantidade = parseInt(this.inputQuantidade.value);
    const valor = parseInt(this.inputValor.value);
    return new Negociacao(data, quantidade, valor);
  }

  imparFormulario(): void {
    this.inputData.value = '';
    this.inputQuantidade.value = '';
    this.inputValor.value = '';
    this.inputData.focus();
  }
}