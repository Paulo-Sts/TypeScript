// Podemos definir namespaces em arquivos separados

///<reference path="multiplosNamespaces2.ts"/>

namespace FormulasGeometricas {
    export namespace Area {
        const pi = 3.14

        export function circulo(raio: number) {
            return pi * Math.pow(raio, 2)
        }
    
    

    }
}

console.log(FormulasGeometricas.Area.circulo(5))
console.log(FormulasGeometricas.Area.retangulo(2, 3))