//Sintaxe métodos 

class Pessoa {
    constructor(public nome: string, public idade: number, public sexo: string) {

    }

    public falar(nome:string) { //Assim como os atributos podemos adicionar a palavra reservada public também aos métodos
        return `Oi meu nome é ${nome}`
    }
}

const novaPessoa = new Pessoa("Maria", 25, "feminino")

console.log(novaPessoa.falar(novaPessoa.nome))