// Singleton é um objeto que é único

class Unica {
    private static instancia: Unica = new Unica
    private constructor() {}

    static getInstancia(): Unica {
        return Unica.instancia
    }

    agora() {
        return new Date
    }
}

console.log(Unica.getInstancia().agora())