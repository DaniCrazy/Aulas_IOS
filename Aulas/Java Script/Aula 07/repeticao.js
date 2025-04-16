// Aula 7 - Java Script (Laços de Repetição)

// Laço for: realiza um teste lógico no início do laço, e não executa as ações sem antes testar a condição.
// A estrutura é composta por:
// Inicialização, condição e incremento.

// Exemplo 1: Listar os números até 50.    
for (contador = 1; contador <= 50; contador ++);
console.log(contador);


// Exemplo 2: Listar tipos de Bananas.

let tiposDeBanana = ['Terra', 'Nanica', 'Prata', 'Maça', 'Ouro', 'Pão']

for (contador = 0; contador < tiposDeBanana.length; contador ++)
console.log(`${tiposDeBanana[contador]} ${contador}`);


// Exemplo 3: Utilizando o laço de repetição for, imprima na tela apenas os números pares até 50.

for (contador = 0; contador <= 50; contador = contador + 2)
console.log(contador);

for (contador =0; contador <= 50; contador += 2)
console.log(contador);

for (contador = 0; contador <= 25; contador ++)
console.log(2*contador);


// While: validade se é verdadeiro ou falso, a condição fica dentro do bloco

// Exemplo 1: 

contador = 0; 

while(contador < 50) {
    console.log(contador + 'Pamonha');
    contador ++
}

// os numeros antes do valor tem que ter o 0 na frente 