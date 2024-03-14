class Simulador {
    constructor() {
        this.registros = [];
    }

    adicionarRegistro(registro) {
        this.registros.push(registro);
    }

    exibirRegistros() {
        console.log('Registros:');
        this.registros.forEach(registro => console.log(registro));
    }
}

const simulador = new Simulador();

let entrada = '';
while (true) {
    entrada = prompt('Digite algo ou "sair" para encerrar o programa:');

    if (entrada.toLowerCase() === 'sair') {
        break;
    }
    simulador.adicionarRegistro(entrada);
    console.log(`Você digitou ${entrada}`);
}

simulador.exibirRegistros();
console.log('Programa encerrado.');
