// EXERCÍCIO 1 - Criando Variáveis

// Crie um programa que declare duas variáveis do tipo inteiro e exiba o resultado da soma dessas variáveis.

let valueA = 10;
let valueB = 2;

console.log(`The sum to ${valueA} and ${valueB}, is ${valueA + valueB}.`);

// Crie um programa que declare uma variável do tipo string e exiba seu conteúdo na tela. 

let startMsg = 'Hello, good afternoon. Have a nice test.';
console.log(startMsg);

// Crie um programa que declare uma variável do tipo booleano e atribua a ela o valor "true". 

let likePizza = true;

// Em seguida, exiba o valor dessa variável na tela.

console.log(`Yes, is ${likePizza}. I love pizza so much ❤️🍕`);

// Crie um programa que declare uma variável do tipo numérico e atribua a ela o valor 3.1415. Em seguida, exiba o valor dessa variável na tela.

let valuePi = 3.1415;
console.log(`This value PI is ${valuePi}`);



// EXERCÍCIO 2 - Utilizando os conceitos apresentados:

// Pergunte ao usuário: Qual o nome do usuário; Qual sua idade; Bairro onde mora;

let names = 'Whats your name?';
let age = 'How old are you?';
let neighborhood = 'Where do you live?';

names = 'Marcia Cristina'
age = 51
neighborhood = 'Vila Alzira'

// Passe o nome do usuário para todas as letras em maiúscula;

let nameUp = names.toLocaleUpperCase();

// Crie um programa que solicite ao usuário que digite dois números inteiros e exiba o resultado da soma desses números na tela.

let value1 = 'Enter to first value:';
let value2 = 'Enter to secund value:';

value1 = 100
value2 = 10

console.log(`The sum to ${value1} and ${value2}, is ${value1 + value2}.`);



// EXERCÍCIO 3 - Aplicando métodos.

// Crie uma variável com o seu nome;

let myName = 'Daniele Cristine dos Santos';

// Depois utilizando o método Replace troque o seu nome do meio pelo último sobrenome;

let newName = myName.replace('Cristine', 'Santos');

// Crie uma string para apresentar o resultado. 

let message = console.log(`Name old: ${myName}\nName new: ${newName}`);



// EXERCÍCIO 4

// Crie um variável preço e atribua a ela um valor numérico.

let price = 100;

// Em seguida, crie um variável desconto e atribua a ela um valor 0.2, representando a porcentagem (20%) de desconto que você deseja aplicar.

let discount = 0.2;

// Por fim, crie uma variável Preço final que use as variáveis preço e desconto para calcular o preço com desconto e imprima o resultado no console.

let finalPrice = price * discount;
console.log(`So cool ! You have ${discount} off. Applying this, the value your product from US$ ${price} becomer US$ ${price - finalPrice} 💸`);



// EXERCÍCIO 5 - Utilizando os conceitos apresentados, desenvolva um programa que faça o seguinte:

// Pergunte ao usuário os valores da primeira prova (N1) e da segunda prova (N2).

let number1 = 'What is value to first test (N1)?';
let number2 = 'What is value to second test (N2)?';

number1 = 10
number2 = 8

// Calcule a média do aluno.

let average = (number1 + number2) / 2;

// Utilize o operador ternário para informar se o aluno está aprovado ou reprovado, considerando que a nota mínima para aprovação é 6.

let result = (average >= 6) ? console.log('Congratulations, you are approved 🎂.') : console.log('What a shame! You are reproved 💔');



// EXERCÍCIO 6

// Crie um array contendo 5 dos seus jogos favoritos.

let favoriteGames = ['GTA V', 'Overcooked', 'Fortnite', 'Destiny 2', 'It Takes Two']

// Em seguida, acesse o segundo elemento desse array e converta esse valor para maiúsculas, utilizando o método aprendido em aula.

// não sei fazeeeeer



// EXERCÍCIO 7

// Crie uma variável que armazene seu nome e sobrenome.

let myFullName = 'Daniele Cristine';

// Em seguida, utilize essa variável para criar um array.

let nameArray = myFullName.split(" ");

// Depois, use o console para apresentar seu sobrenome em uma frase que faça sentido.

console.log(`My last name is ${nameArray[1]}. Will you marry me so can use that last name too 💍💖?`);
