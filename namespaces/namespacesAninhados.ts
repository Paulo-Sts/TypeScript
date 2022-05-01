// Podemos definir namespaces dentro de outros namespaces
namespace Geometria {
    export namespace Area {
        const pi = 3.14

        export function circulo(raio: number) {
            return pi * Math.pow(raio, 2)
        }
    
        export function retangulo(base: number, altura: number) {
            return base * altura
        }
    

    }
}

console.log(Geometria.Area.circulo(2))
console.log(Geometria.Area.retangulo(2, 2))