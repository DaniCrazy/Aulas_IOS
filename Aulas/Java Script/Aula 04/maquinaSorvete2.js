// Exemplo 7: Uso do switch (Máquina de sorvete)

let saborEscolhido = "morango"

switch (saborEscolhido) {
    case 'chocolate':
        console.log('Seu sorvete sabor', saborEscolhido, 'está pronto !')
        break;

    case 'morango':
        console.log('Seu sorvete sabor', saborEscolhido, 'está pronto !')
        break;

    case 'baunilha':
        console.log('Seu sorvete sabor', saborEscolhido, 'está pronto !')
        break;

    default:
        console.log('Desculpe, este sabor', saborEscolhido, 'não tem no cardápio.')
        break;
}