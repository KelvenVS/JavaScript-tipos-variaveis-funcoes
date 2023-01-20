const idadeMinima = 18;
const idadeCliente = 16;

if (idadeCliente >= idadeMinima) {
  console.log("cerveja")
} else {
  console.log("suco")
}

            //condição                    //true     //false
console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco")
const d = ''

if (false) {
  console.log('Verdade')
} else {
  console.log('Falso')
}

const nome = "Leo";
const idade = 19;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`

console.log(pedido)
