// São tipos definidos para estabelecer uma tipagem de forma mais geral

/* 
Ao definir o tipo com generics o tipo genérico se adequa ao que for recebido e valida as características do tipo recebido
O Generics define o tipo do dado no momento de sua declaração, ou quando ele é definido explicitamente na execução do código
O Generics aceita desde os tipos primitivos a objetos, à novos tipos criados segundo a necessidade
*/

function retorno<tipoGenerico>(objeto: tipoGenerico) { // O <> indica a existência de um tipo generics
    return objeto
}

//console.log(retorno(44).length) 
//console.log(retorno({nome: "Objeto", tipo: 1}).length) 

console.log(retorno("String").length) // Declaração tardia, define no momento da atribuição
console.log(retorno<number>(3)) // Definição na execução, ou seja, define que o valor é um Number

// Generics na API

const valores: any = [10, 5.6, "2"] // Aceita qualquer tipo de valor

const valoresNumericos: Array<number> = [10, 5.6, 2] // O Array aceitará apenas valores do tipo generics definido