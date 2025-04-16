// EXERCÍCIO 1 - Cálculo de Média e Aprovação
// Descrição > Crie um programa que receba três notas, calcule a média e exiba se o aluno foi aprovado ou reprovado.

// Requisitos:
// • Use variáveis para armazenar as notas.
// • Utilize estruturas if/else para determinar a situação (por exemplo, média ≥ 7 para aprovado).
// • Exiba o resultado com Alert().

let scoreStudent = [4 + 10 + 10];
let average = scoreStudent / 3;

if (average == 7) {
    alert(`Very good ! \nYour average is ${average}, but try to the better in the next. You are approved 😉.`);
} 

else if (average > 7) {
    alert(`Congratulations ! \nYour average is ${average}, cotinue like this. You are approved 🎂.`); 
}

else {
    alert(`What a shame ! \nYour average is ${average}, and the minimum score is 7. You are failed 💔.`);
}