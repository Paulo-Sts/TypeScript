// Podemos definir uma interface que só pode ser implementada por uma função

interface FuncaoConta {
    (paraA: number, paraB: number): number
}

let potencia: FuncaoConta

potencia = function(base: number, exp: number): number {
    return base ** exp
}