const endereco = {
  estado: "RJ",
  cidade: "Niterói"
}

const pessoa = { 
	temCNH: false,
	nome: 'Amanda',
	idade: 23,
  endereco, 
  password: '123'
}

const { password, ...pessoaSemPassword } = pessoa;



console.log(pessoaSemPassword)

// const nomes1 = ["A", "B", "C",]
// const nomes2 = ["D", "E", "F",]

// const juncao = [...nomes1, ...nomes2]

// const [item1, ...resto] = juncao

// console.log(resto)




