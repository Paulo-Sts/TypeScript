interface N1 {
    funcao1(): void
}

interface N2 {
    funcao2(): void
}

interface N3 extends N1, N2{ //Uma interface pode herdar de outras interfaces
    funcao3(): void
}

class Classe1 implements N3 {
    funcao1(): void {
        console.log("Função herdada da interface N1 através de N3")
    }

    funcao2(): void {
        console.log("Função herdada da interface N2 através de N3")
    }

    funcao3(): void {
        console.log("Função herdada da interface N3")
    }
}