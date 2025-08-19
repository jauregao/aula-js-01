// const nome = "Ana";
// const idade = 23;

// Ola, meu nome é Amanda e eu tenho 23 anos

// console.log(
//   "Olá " 
//   + nome  
//   + " e eu tenho " 
//   + idade
//   + "anos"
// )

// console.log(`Meu nome é ${nome} e eu tenho ${idade} anos.`)

// saudacao()

// function saudacao( ) {
//   console.log("Olá mundo!")
// }

// function saudacao( nome ) {
//   console.log("Olá, " + nome );
// }

// saudacao(nome);
// saudacao("Amanda")
// saudacao("Katia")

// function saudacao( nome, idade ) {
//   console.log(`Olá, me chamo ${nome} e tenho ${idade} anos`);
// }

// saudacao(nome, idade);

// function saudacao( pessoa ) {
//   console.log(`Olá, me chamo ${pessoa.nome} e tenho ${pessoa.idade} anos`);
// }
// const usuario = { nome: "Amanda", idade: 23 };
// saudacao(usuario); 

// function saudacao({nome, idade}) {
//   console.log(`Olá, me chamo ${nome} e tenho ${idade} anos`);
// }
// const usuario = { nome: "Amanda", idade: 23 };
// saudacao(usuario);

// const teste = saudacao(usuario)
// console.log(teste);

// function multiplicar (valor1, valor2) {
//   return valor1 * valor2
// }

// function dividirPorCinco(valor) {
//   console.log("Aqui executa")
//   return valor/5;
// }


// const resultadoMultiplicacao = multiplicar(99, 2)
// const resultadoDivisao = dividirPorCinco(resultadoMultiplicacao)
// console.log(resultadoDivisao)

// const minhaFuncao = function () {
//   return "Oi"
// }
// console.log(minhaFuncao())

// const minhaFuncao2 = (nome) => {
//   console.log(nome)
// }
// minhaFuncao2("Amanda")

// function multiplicarUmNumeroPorOutro( a, b = 2 ) {
//   console.log(a)
//   console.log(  b)
//   console.log(a * b)
// }

// multiplicarUmNumeroPorOutro(5, 3)

// function cumprimentar(nome) {
//   console.log(`Olá, ${nome}!`);
// }

// function processarUsuario(callback) {
//   const usuario = "Amanda";
//   callback(usuario);
// }

// processarUsuario(cumprimentar);

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const numerosPares = numeros.map( (numero) => {
//     if( numero % 2 === 0 ) {
//       return numero;
//     }
//   }
// )

// [2, 4, 6, 8]

// console.log(numerosPares)

setTimeout(() => {
    console.log(`Segundo`)
}, 3000)
