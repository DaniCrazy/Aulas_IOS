// Aula 09 - Java Script

// Função: para tarefas repetitivas.

// Exemplo 1 - Cálculo de IMC


console.log(calcularIMC(70, 1.60))

function calcularIMC(peso, altura) {
    return peso / (altura * altura)
}


// Exercício 1: Faça uma função para cada operação matemática:

// Adição.

console.log(calcularAdicao(20, 70));

function calcularAdicao(valor1, valor2) {
    return valor1 + valor2
}

// Subtração.

console.log(calcularSubtracao(150, 60));

function calcularSubtracao(valor1, valor2) {
    return valor1 - valor2
}

// Multiplicação.

console.log(calcularMultiplicacao(10, 15));

function calcularMultiplicacao(valor1, valor2) {
    return valor1 * valor2
}

// Divisão.

console.log(calcularDivisao(200, 5));

function calcularDivisao(valor1, valor2) {
    return valor1 / valor2
}