// Visibilidade atributos

class Visibilidade {

    public nome: string // Por padrão todos os atributos são públicos, mesmo sem usar a palavra reservada public
    public idade: number
    private cpf: string // O private torna o atributo privado, impedindo assim que seja acessado diretamente

    constructor(nome:string, idade: number, cpf: string) {
        this.nome = nome
        this.idade = idade
        this.cpf = cpf
    }

    public falaNome(): string {
        return this.nome
    }

    private validaIdade(data:number) { // Métodos privados servem para serem usados dentro da própria classe
        if(data > 18) return true
    }

    public permissao(idade: number) {
        return this.validaIdade(idade)
    }

    protected pensamento(){ //O protected é um outro modificador de acesso, esse tipo de modificador torna visível o método dentro da classe e transmitido por herança.
        return "Meus pensamentos"
    }
}

const teste1 = new Visibilidade("pessoa1", 24, "001.345.290-55")

console.log(`Posso beber? ${teste1.permissao(teste1.idade)}`)
