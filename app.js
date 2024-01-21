//Variaveis Globais
let primeiroNumero;
let segundoNumero;
let operador;
let resultado;

const display = document.getElementById("display");

function addNoDisplay(numero) {
    display.value += numero;
}

function limparDisplay() {
    display.value = null;
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function setOperador(op) {
    if (primeiroNumero == null && display.value == '' && op !== '*' && op !== '/') {
        display.value += op;
        console.log("if: " + primeiroNumero)
    }

    else {
        primeiroNumero = Number(display.value);
        
        operador = op;
        console.log("else: " + primeiroNumero)

        limparDisplay();
    }
}

function setPonto() {
    if (display.value == null && display.value == '') {
        return;
    } else {
        if (display.value.includes(".")) {
            return;
        }
        else {
            display.value += ".";
        }
    }
}

function calcular(primeiroNumero, operador, segundoNumero) {
    console.log("Calcular(): " + primeiroNumero, operador, segundoNumero);
    switch (operador) {
        case "+":
            resultado = Number(primeiroNumero) + Number(segundoNumero);
            return resultado;

        case "-":
            resultado = Number(primeiroNumero) - Number(segundoNumero);
            return resultado;
        case "*":
            resultado = Number(primeiroNumero) * Number(segundoNumero);
            return resultado;
        case "/":
            if (segundoNumero == 0) {
                alert("Não é possivel dividir por 0");
                return 0;
            }
            resultado = Number(primeiroNumero) / Number(segundoNumero);
            return resultado;
    }
}

function calcularResultado() {
    segundoNumero = display.value;

    if (segundoNumero == "") {
        segundoNumero = 0;
    }
    resultado = calcular(primeiroNumero, operador, segundoNumero);

    primeiroNumero = resultado;
    display.value = resultado;

}


function mudarCores() {

    let calculadora = document.body;

    if (calculadora.classList.contains('light-theme')) {
        calculadora.classList.remove('light-theme');
        calculadora.classList.add('dark-theme');
    } else {
        calculadora.classList.remove('dark-theme');
        calculadora.classList.add('light-theme');
    }
}