//Sintaxe métodos 

class Pessoa {
    constructor(public nome: string, public idade: number, public sexo: string) {

    }

    public falar(nome:string) { //Assim como os atributos podemos adicionar a palavra reservada public também aos métodos
        return `Oi meu nome é ${nome}`
    }

    public idadePessoa(): number {
        return this.idade
    }

    private rendaPessoa() { //Podemos definir métodos privados com a palavra reservada private
        return "3000"
    }
}

const novaPessoa = new Pessoa("Maria", 25, "feminino")

console.log(novaPessoa.falar(novaPessoa.nome))

console.log(novaPessoa.idadePessoa())