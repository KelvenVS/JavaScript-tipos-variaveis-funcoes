// // parâmetros de função

//               //2       //2
// // function soma(numero1, numero2) {
// //   return numero1 + numero2;
// // }

// // console.log(soma(2, 2))
// // console.log(soma(245, 20))
// // console.log(soma(-500, 60))

// // parâmetros x argumentos

// // ordem dos parâmetros

// function nomeIdade(nome, idade) {
//   return `meu nome é ${nome} e minha idade é ${idade}`;
// }

// // console.log(nomeIdade(40, "Juliana"))

// function soma(numero1, numero2) {
//   return numero1 + numero2;
// }

// function multiplica(numero1 = 1, numero2 = 1) {
//   return numero1 * numero2;
// }

//                             //9
console.log(multiplicaPor2(soma(4, 5)))

let num1 = 6;
let num2 = 5;

function soma(num1,num2) {
  return num1 + num2;
}

function multiplicaPor2(m2){
  return 2 * m2;
}

console.log(soma(num1,num2));
console.log(soma(9,4));
console.log(soma(8,5)); 

function nameAge(name,age){
  return `meu nome é ${name} e minha idade é ${age}`;
}

console.log(nameAge(22,"Kelven"))

function cumprimentar(){
  console.log('oi gente!')
 }
 
 cumprimentar()

 function cumprimentaPessoa(pessoa){
  console.log(`oi, ${pessoa}!`)
 }
 
 cumprimentaPessoa('Helena')

 function cumprimentar(){
  return 'Oi gente!'
 }
 
 function cumprimentaPessoa(nomePessoa) {
  console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
 }
 
 cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”

 function operacaoMatematica(numero1, numero2, numero3) {
  return numero1 + numero2 + numero3
 }
 
 console.log(operacaoMatematica(15, 30, 45)) // 90
 