// Interface é um conjunto de atributos e métodos definidos que quando associados a um objeto, esse objeto obrigatoriamente deve instanciar os atributos e métodos

interface Humano {
    nome: string
    idade?: number // O ? torna o atributo opcional ao associar a interface
    [propriedade: string]: any // Essa sintaxe define o nome de um atributo de forma dinâmica
}

class Pessoas implements Humano {

    nome!: string // A ! serve como inicializador do atributo
    idade!: number
    ["peso"]!: number

}