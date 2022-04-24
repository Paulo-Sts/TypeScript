class Animal {

    private _raca: string = '' //o _ é uma convenção para definir atributos privados

    get raca() : string {
        return this._raca
    }

    set raca(valor: string) { // O set é usado para alterar o valor de um atributo privado
        this._raca = valor
    }
}

const animal1 = new Animal()

animal1.raca = 'cachorro' //Os métodos get e set são acessados como atributos da classe

console.log(animal1.raca)