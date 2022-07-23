// Namespaces é um espaço reservado que possibilita a criação de nomes com escopo local, não tendo que se preocupar com conflitos em outros arquivos

namespace Area { // Essa namespace contém as funcionalidades de um mesmo escopo de forma local
    const pi = 3.14

    export function circulo(raio: number) { // É necessário exportar as funções para que possam ser acessadas
        return pi * Math.pow(raio, 2)
    }
    
    export function retangulo(base: number, altura: number) {
        return base * altura
    }
    

}

console.log(Area.circulo(2))
console.log(Area.retangulo(2, 2))