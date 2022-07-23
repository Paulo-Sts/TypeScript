// Definindo o tipo de retorno da função
function nomeFuncao():string{
    let retorno = "Paulo"
    return retorno
}

// Definindo funcão vazia
function helloWorld(): void {
    return console.log("Hello World")
}

// Definindo tipos dos parâmetros de uma função
function soma(n1: number, n2: number) {
    return n1 + n2
}

console.log(soma(1, 3))

// Definir função como tipo
let funcao: (n1: number, n2:number) => number // A partir da definição dos tipos da função com seus parâmetros e retornos, define-se qual tipo de função a variável pode receber
funcao = soma
console.log(funcao(1, 2))