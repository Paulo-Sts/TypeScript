//Visibilidade atributos

class Visibilidade {

    public nome: string //Por padrão todos os atributos são públicos, mesmo sem usar a palavra reservada public
    public idade: number

    constructor(nome:string, idade: number) {
        this.nome = nome
        this.idade = idade
    }
}