// São classes usadas como herança para classes filhas, classes abstratas não podem ser instânciadas

abstract class Calculo {

    protected resultado: number = 0

    abstract executar(...numeros: number[]): void //Em classes abstratas podemos definir métodos abstratos com o seu corpo, esses métodos são usados por suas classes filhas

    getResultado(): number {
        return this.resultado
    }

}

class SomaValores extends Calculo {

    executar(...numeros: number[]): void { // Métodos abstratos devem ser instânciados por classes filhas concretas
        this.resultado = numeros.reduce((t, a) => t + a)
    }
}


class multiplicaValores extends Calculo {

    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => t * a)
    }
}

let exemplo = new SomaValores()

exemplo.executar(20,10, 30, 20, 20)
console.log(exemplo.getResultado())