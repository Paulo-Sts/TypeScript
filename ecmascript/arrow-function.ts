// Pode-se definir implicitamente ou explicitamente o tipo de retorno

const multiplica = (n1: number, n2: number) => n1 * n2

const divide = (n1: number, n2: number): number => n1 / n2

// Ao definir um bloco deve-se declarar explicitamente o retorno

const somaValor = (n1: number, n2: number): number => {
    return n1 + n2
}