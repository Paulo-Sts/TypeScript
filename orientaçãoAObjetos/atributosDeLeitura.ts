// São atributos que após serem inicializados não podem ser alterados

class Exemplo {
    public readonly modelo: string

    constructor(modelo: string, public readonly prefixo: string) {
        this.modelo = modelo
    }
}

const novoObjeto2 = new Exemplo("teste só leitura", "teste2 só leitura")

//novoObjeto2.modelo = "testes"