// EXERCÍCIO 3: Sistema de Classificação
// Descrição > Crie um programa que receba uma nota numérica e retorne uma classificação de letra (por exemplo, A, B, C, D, F).

// Requisitos:
// • Nota de 90 a 100: “A”
// • Nota de 80 a 89: “B”
// • Nota de 70 a 79: “C”
// • Nota de 60 a 69: “D”
// • Abaixo de 60: “F”
// • Exiba o resultado no console.

let score = 100;

if (score >= 90 && score <= 100) {
    console.log(`You are beast 😎 ! Your score is ${score}, classification level "A".`);
}

else if (score >= 80 && score <= 89) {
    console.log(`Very nice 🫡 ! Your score is ${score}, classification level "B".`);
}

else if (score >= 70 && score <= 79) {
    console.log(`Not bad 😊 ! Your score is ${score}, classification level "C".`);
}

else if (score >= 60 && score <= 69) {
    console.log(`This bad ☹️ ! Your score is ${score}, classification level "D".`);
}

else if (score <= 59) {
    console.log(`Don't believe 😮 ! Your score is ${score}, classification level "F".`);
}

else {
    console.log(`Sorry ! this number not valid. \nPlease, enter new value from 0 to 100 and try again.`);
    
} 