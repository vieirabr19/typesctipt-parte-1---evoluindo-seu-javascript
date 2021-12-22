export class Negociacao {
    constructor() {
        this.data = document.querySelector('#data');
        this.quantidade = document.querySelector('#quantidade');
        this.valor = document.querySelector('#valor');
    }
    adicionar() {
        console.log(this.data);
        console.log(this.quantidade);
        console.log(this.valor);
    }
}
