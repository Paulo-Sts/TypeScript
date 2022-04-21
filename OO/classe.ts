//Sintaxe Classe

class NomeClasse {
    //atributos da classe
    atributo1: number
    atributo2: string
    atributo3: boolean

    //construtor que inicializa a classe com seus atributos
    constructor(atributo1: number, atributo2: string, atributo3: boolean) {
        this.atributo1 = atributo1
        this.atributo2 = atributo2
        this.atributo3 = atributo3
    }
}

//Instância da classe

const novoObjeto = new NomeClasse(1, "objeto1", true)

//Acessando atributos classe
console.log(novoObjeto.atributo1)

//Parâmetro padrão
class SegundaClasse {

    primeiroAtributo: number
    segundoAtributo: number
    terceiroAtributo: number

    constructor(primeiroAtributo: number = 25, segundoAtributo: number = 4, terceiroAtributo: number = 2022) {
        this.primeiroAtributo = primeiroAtributo
        this.segundoAtributo = segundoAtributo
        this.terceiroAtributo = terceiroAtributo
    }
}

//Instânciando com valores padrão
const objetoPadrao = new SegundaClasse

//Acessando atributos objeto
console.log(objetoPadrao.primeiroAtributo)
console.log(objetoPadrao.segundoAtributo)
console.log(objetoPadrao.terceiroAtributo)