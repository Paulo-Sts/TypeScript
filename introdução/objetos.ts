// Ao definir os atributos de um objeto, define-se automaticamente os tipos dos atributos do objeto
let pessoa = {
    nome: "Paulo",
    idade: 24
}

// Pode-se definir os tipos do atributos explicitamente

let serHumano: {nome: string, idade: number} = {
    nome: "João",
    idade: 20
}

// A ordem dos atributos não importa, o importante é respeitar os atributos definidos e seus tipos
serHumano = {
    idade: 54,
    nome: "Cleide"
}