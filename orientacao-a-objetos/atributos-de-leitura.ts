// São atributos que após serem inicializados não podem ser alterados

class Exemplo {
    public readonly modelo: string // Declaração normal

    constructor(modelo: string, public readonly prefixo: string) { // Declaração reduzida
        this.modelo = modelo
    }
}

const novoObjeto2 = new Exemplo("teste só leitura", "teste2 só leitura")

//novoObjeto2.modelo = "testes"
//novoObjeto2.prefixo = "testes"