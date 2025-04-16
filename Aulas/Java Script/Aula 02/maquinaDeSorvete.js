// Exercício 1 - Crie                                         

let sabor1 = 'morango'
let sabor2 = 'sensação'
let sabor3 = 'churros'

let saborEscolhido = sabor1

if (saborEscolhido != sabor1 || sabor2) {
 } else {(saborEscolhido != sabor3)
}

console.log('Chefia! Seu sorvete de', saborEscolhido, 'esta pronto!')

// Correção - Exercício 1

let sorvete1 = 'chocolate'
let sorvete2 = 'morango'
let sorvete3 = 'creme'

let sorveteEscolhido = sorvete1

if (sorveteEscolhido == sorvete1) {
    console.log('Seu sorvete de', sorvete1, "está pronto!");
} else if (sorveteEscolhido == sorvete2) {
    console.log('Seu sorvete de', sorvete2, "está pronto!");
} else if (sorveteEscolhido == sorvete3) { 
    console.log('Seu sorvete de', sorvete3, "está pronto!");     
} else {
    console.log('sabor não encontrado');
}

