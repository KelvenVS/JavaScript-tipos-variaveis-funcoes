const lukeLogin = () => {
    let array = []
    for (i = 0; i < 90000; i++) {
        array.push(i)
    }
    return "Luke logado com sucesso!"
}

const leiaLogin = () => {
    let array = []
    for (i = 0; i < 90000; i++) {
        array.push(i)
    }
    return "Leia logada com sucesso!"
}

console.log(lukeLogin())
console.log(leiaLogin())

// const usuarioLogin = (pessoa) => {
//     let array = []
//     for (i = 0; i < 90000; i++) {
//         array.push(i)
//     }
//     return `${pessoa} logou com sucesso no sistema!`
// }

// console.log(usuarioLogin("Luke"))

// const acesso = (nome) => {
//     return `${nome} logou com sucesso no sistema!`
// }

// const usuarioLogin = (nome) => {
//     let array = []
//     for (i = 0; i < 90000; i++) {
//         array.push(i)
//     }
//     return acesso(nome)
// }

// console.log(usuarioLogin("Luke"));
const acesso = (nome) => {
    return `${nome} logou com sucesso no sistema!`
  }

const autentica = (cargo) => {
    let array = []
    for( i = 0; i < cargo; i++){
      array.push(i)
    }
    return true;
  }

  const login = (pessoa, autentica) => {
    if(pessoa.cargo === `funcionario`) {
       autentica(90000)
    } else if(pessoa.cargo === `diretoria`) {
       autentica(900000)
    }
   return acesso(pessoa.nome)
  }
  //console.log(login({cargo: `diretoria`, nome: `Leia`}, autentica))
  console.log(login({ nome: `Leia`, cargo: `diretoria`}, autentica))

//   a higher order function login compara o valor da chave cargo no if...else e executa a função autentica passando como parâmetro o valor 900000 pois pessoa.cargo === ‘diretoria’;
// a função autentica é executada e o valor 900000 é utilizado no loop for. Uma vez iniciado o loop, o JavaScript só continua a executar as outras linhas da função após o término da iteração.
// Com o término do loop, a função autentica executa sua última linha e vai retornar true. Esse valor é passado de volta para a função autentica, que continua seu fluxo normal até a última linha, na qual chama a função acesso passando como parâmetro o valor da chave nome e recebendo de volta o retorno de acesso, uma string com o texto ”Leia logou com sucesso no sistema!”
// As funções acesso e autentica são “chamadas de volta” (ou, em inglês, called back) pela função login; esse tipo de função é chamada de “função callback”, sendo a função login a de ordem maior na hierarquia, ou seja, a ”higher order function.

const palavra="alura";
console.log(palavra.length) //5
console.log("alura".charAt(3)) //r
console.log(palavra.indexOf("a")) //4
//O resultado é a posição 4. Porém, na utilização do indexOf(), fique atento caso o caractere que se busca na string seja encontrado em mais de uma posição, pois será retornada somente a primeira ocorrência. veja o código abaixo:
console.log(palavra.toUpperCase()) //ALURA
console.log(palavra.toLowerCase()) //alura

let frase= "Mergulhando em tecnologia."
console.log(frase.substr(0,11)) // Mergulhando

let nome = "André";
let comunicacao = " Olá, sr. nomeusurario, informamos que a partir da presente data o senhor tem 50% de desconto em nossa loja.";
console.log(comunicacao.replace("nomeusurario",nome));

let novaString = "Programe nas principais linguagens e plataformas. Explore linguagens como ";
console.log(novaString.concat("JavaScript,").concat(" Python,").concat(" e C#."))

let linguagens = "JavaScript;Java;C#;PHP;Python;Go;Vb;SQL;C;C++";
let arrayLinguagens = linguagens.split(";");
console.log(arrayLinguagens)
