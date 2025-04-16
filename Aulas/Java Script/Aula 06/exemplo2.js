// Aula 6 - Java Script

// Crie um sistema de Exibição de Mensagem com switch - Verificação do Dia da Semana.
// Esse sistema recebe um número correspondente a um dia da semana (1 para segunda-feira, 2 para terça-feira, etc.).
// Ele exibe uma mensagem informando qual é o dia atual. 
// Se o número informado não corresponder a um dia válido (1 a 7), _ 
// uma mensagem de erro é mostrada, indicando que o valor inserido é inválido.

let diaSemana = 8;

switch (diaSemana) {
    case 1:
        console.log('Olá, seja bem-vindo(a) ! Hojé é domingo, aproveite para descansar 🌅.');
        break;

    case 2:
        console.log('Olá, seja bem-vindo(a) ! Hojé é segunda-feira, tenha uma ótima semana 🍀.');
        break;

    case 3:
        console.log('Olá, seja bem-vindo(a) ! Hojé é terça-feira, estamos só começando ✌.');
        break;

    case 4:
        console.log('Olá, seja bem-vindo(a) ! Hojé é quarta-feira, precisa de um empurrãozinho 😁?.');
        break;

    case 5:
        console.log('Olá, seja bem-vindo(a) ! Hojé é quinta-feira, vérpera do fim 😪.');
        break;

    case 6:
        console.log('Olá, seja bem-vindo(a) ! Hojé é sexta-feira, vamos de sextou 🥳?.');
        break;

    case 7:
        console.log('Olá, seja bem-vindo(a) ! Hojé é sábado, está livre para fazer o que quiser 🙌.');
        break;

    default:
        console.log('Osh ! Que dia é esse? Por favor, insira um número entre 1 e 7. ❌')
        break;
}