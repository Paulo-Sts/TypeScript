class Carro {

    constructor(public marca: string, public modelo: string, public cor: string) {

    }
}

class Mercedes extends Carro {
    constructor(modelo: string, cor: string, public velocidadeMaxima: number) {
        super('Mercedes', modelo, cor) //Com o super é possível sobrescrever atributos herdados
    }
}

const novoCarro = new Mercedes("CL 500", "Prata", 300)

console.log(novoCarro)