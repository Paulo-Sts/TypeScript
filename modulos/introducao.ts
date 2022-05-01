import { multiplica as multiplicação } from "./modulo1"; // O alias possibilita dar um apelido a função importada
import { soma } from "./modulo2";
import subtrai from "./modulo3" // O export default elimina a necessidade de usar o operador de desestruturação ao importar um módulo 

console.log(multiplicação(2, 2))
console.log(soma(5, 3))
console.log(subtrai(2, 3))