
interface NovoCarro {

    modelo: string
    cor: string
    buzina(): void 
}


const carro1: NovoCarro = { //Podemos associar um objeto a interface, definindo que o objeto é do tipo da interface
    modelo: "Gol",
    cor: "Preto",
    buzina() {
        console.log("POM POM")
    }
}