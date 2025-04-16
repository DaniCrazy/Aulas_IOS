// Aula 6 - Java Script

// Exercício 1: Crie um sistema de Verificação de Idade com if-else.
// Este sistema verifica se a pessoa tem idade suficiente para acessar um conteúdo restrito, como um site ou serviço. 
// Se a idade for maior ou igual a 18 anos, a pessoa tem permissão para acessar o conteúdo;
// Caso contrário, uma mensagem de erro é exibida informando que a idade mínima não foi atingida.


let idade = '17'

if (idade >= 18) {
    console.log('Que legal ! Você tem', idade, 'anos de idade. Pode entrar sem problemas. 😎')
} else {
    console.log('Ops ! Você tem', idade, 'anos de idade. O que está fazendo aqui 🤯?');
}