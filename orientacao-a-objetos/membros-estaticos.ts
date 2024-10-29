// São atributos e métodos que pertencem a classe e não ao objeto

class Matematica {
    static PI: number = 3.14 // A palavra static torna o atributo como atributo de classe

    static areaCirculo(raio: number) :number { // A palavra reservada static torna o método como método de classe, ele pode ser acessado sem a necessidade de instânciar a classe
        return this.PI * (raio*raio)
    }
}

console.log(Matematica.areaCirculo(5))