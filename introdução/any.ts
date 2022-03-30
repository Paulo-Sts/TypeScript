// Esse tipo fornece liberdade de tipagem fraca para variáveis

let videoGame: any = "xbox"

videoGame = { // O tipo any possibilita a alteração do tipo da variável, mesmo após sua inicialização
    microsoft: "Xbox",
    sony: "Playstation",
    nitendo: "Switch"
}

console.log(videoGame.microsoft)