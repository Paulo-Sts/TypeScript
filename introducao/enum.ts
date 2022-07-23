// É uma estrutura que define um conjunto de valores pré definidos

enum idiomas {
    portugues,
    inglês,
    francês,
    alemão
}

let idiomaBrasil: idiomas 

idiomaBrasil = idiomas.portugues

console.log(idiomaBrasil) // Internamente o tipo armazena o valor do índice de cada elemento do enum