/**
 * ## **1. Gerador de frases**
Crie uma função `gerarFrase` x

que receba:
- `nome`
- `cidade`
- `profissao` x


Ela deve retornar:
```
Meu nome é Amanda, moro em São Paulo e trabalho como Desenvolvedora. x
```
Deixe `profissao` com valor padrão `"Estudante"`. x
 */

function gerarFrase( nome, cidade, profissao = "Estudante" ) {
  return `Meu nome é ${nome}, moro em ${cidade} e trabalho como ${profissao}.`
}

const frase = gerarFrase("Amanda", "Niterói")

console.log(frase)
