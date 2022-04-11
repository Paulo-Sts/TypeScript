// Ao definir um novo tipo, pode-se utiliza-lo para definir novos tipos de dados de acordo com o necessário

type pessoa = {
    nome: string,
    falar: () =>  "Oi"
}

// Union Types é a definição de certos tipos de dados que uma variável pode receber
let coisa: number | string
coisa = 1
console.log(coisa)

coisa = "teste"
console.log(coisa)