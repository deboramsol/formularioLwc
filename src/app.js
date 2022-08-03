import { LightningElement } from "lwc";

export default class App extends LightningElement {
  primeironome;
  sobrenome;
  telefone;

/*função handleOnChange*NomeInput(event)

é um parametro passado para dentro da função contendo informações do de quem o invocou */

handleOnChangePrimeiro(event){
  /* event traz um conjunto de dados no formato de objeto js
  para acessar o valor do cmapo do input
  devemos acessar a key detail e dentro dele a key value
  assim eu recupero a informação do campo */

  /* chamar o primeiro nome
  this.primeriro0 */
this.primeironome = event.detail.value;
//console.log(event.detail.value)
console.log('primeironome' + this.primeironome);
}
// fuçao para receber dadps do input de sobrenome
handleOnChangeSobrenome(event){
  this.sobrenome = event.detail.value;
  console.log('sobrenome' + this.sobrenome);
}
/*crie a função para receber os dados na variavel telefone */
handleOnChangeTelefone(event){
  this.telefone = event.detail.value;
  console.log('telefone' + this.telefone);
}
}