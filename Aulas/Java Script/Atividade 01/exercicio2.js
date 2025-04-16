// EXERCÍCIO 2: Manipulação de String – Formatação de Nome
// Descrição > Crie um programa que receba uma string com o nome completo do aluno e retorne o nome e sobrenome separados.

// Requisitos:
// • Utilize métodos de string (como split, toUpperCase, substring, etc.) para separar e reorganizar o nome.
// • Considere nomes compostos e garanta que os últimos elementos sejam o sobrenome.

let fullName = 'Ana Clara Vitoria dos Santos';

let arrayName = fullName.split(" ");
let firstName = arrayName.slice(0 , -2).join(" ");
let lastName = arrayName[arrayName.length - 1];

console.log(`Hi ! The name of student is ${firstName} and your lastname is ${lastName}`);
