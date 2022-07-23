///<reference path="multiplosNamespaces1.ts"/>

namespace FormulasGeometricas {
    export namespace Area {

        export function retangulo(base: number, altura: number) {
            return base * altura
        }
    
    

    }
}
console.log(FormulasGeometricas.Area.circulo(5))
console.log(FormulasGeometricas.Area.retangulo(23, 5))