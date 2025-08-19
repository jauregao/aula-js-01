/**
 * Crie uma função `calcularMedia` que receba um **objeto aluno** com:

```jsx
{
  nome: "João",
  notas: [8, 7, 6]
}
```

A função deve retornar a frase:

```
João tem média 7 e foi Aprovado.
```

Considerar aprovado se média >= 7.
 */

// array de livros que será o meu input = argumento
const livros = ['O Pequeno Príncipe', 'Dom Casmurro', 'Grande Sertão: Veredas', 'O Morro dos Ventos Uivantes', 'Crime e Castigo'];

// variavel que guarda o nome do livro a ser pesquisado na estante
const nomeDoLivro = "O Morro dos Ventos Uivantes";

// estou passando por todos os livros da estante, um por um
for(let i = 0; i < livros.length; i++) {
  
  //estou verificando se o nome do livro na posição i é igual ao que eu procuro
  if(livros[i] === nomeDoLivro){
    // se for, eu vou retornar a posção dele
    console.log(`O livro está na posição ${ i + 1 }`)
  }

  // se não houver nenhum, informo
  console.log("Não encontrado.")
}

const resultado = livros.includes(nomeDoLivro) ? console.log(`O livro está na posição ${ livros.indexOf(nomeDoLivro) + 1 }`) : console.log("Não achei o livro");
