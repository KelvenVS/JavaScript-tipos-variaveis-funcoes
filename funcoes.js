// let x = "";
// console.log(x);
// x = "oi";

// DECLARAÇÃO DE FUNÇÃO

// 1) declara a função
//2 -> valor de soma()
function imprimeTexto(texto) {
  console.log(texto)
}

// 2) executa a função (1 ou + vezes)

//imprimeTexto(soma());
// imprimeTexto("outro texto");
  imprimeTexto(soma());

// três formas de escrever funções

function soma(){
  const resultado = 2 + 2;
  //outros códigos
  //vários console.log()
  return resultado;
  // return 2 + 2;
}

//console.log(soma())
//é necessario imprimir para aparecer resultado
//soma()

let varNum1 = 5;
let varNum2 = 2.5;
let varNum3 = 64;
let arrayNum = [4,6,9,5,7,6,3,8];


console.log(Math.round(varNum1));
//Faz o arredondamento (round em inglês) de um número de ponto flutuante para o inteiro mais próximo.
console.log(Math.ceil(varNum1));
//Faz o arredondamento para o valor mais alto, também conhecido como teto (ceil em inglês).
console.log(Math.floor(varNum1));
//Faz o arredondamento para o valor mais baixo, também conhecido como piso (floor em inglês).
console.log(Math.trunc(varNum1));
//Desconsidera os números decimais, o que é conhecido como truncamento.
console.log(Math.pow(varNum1,varNum2));
//Faz a exponenciação de 2 números, quando for simples, como ao quadrado(2) ou cubo(3). Recomenda-se usar a multiplicação por ser mais rápido.
//Math.pow(4 , 2) retorna 4^2 = 16
//Math.pow(2.5 , 1.5) retorna 2.5^(3/2) = 3.9528 ...
console.log(Math.sqrt(varNum3));
//Retorna a raiz quadrada de um número.
console.log(Math.min(4,6,9,5,7,6,3,8));
//Retorna o menor valor entre os argumentos.
console.log(Math.max(4,6,9,5,7,6,3,8));
//Retorna o maior valor entre os argumentos.
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());