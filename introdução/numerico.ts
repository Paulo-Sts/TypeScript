// A definição do tipo pode ser feita de forma explícita ou dinâmicamente através da atribuição de valor

let numero = 32

let numero2: number

numero2 = 45.2

console.log(typeof(numero))

//Caso o na declaração da variável não se defina o valor com seu tipo o Typescript torna a variavel dinâmica
let teste
teste = 54
console.log(typeof(teste))

teste = "Trocando"
console.log(typeof(teste))