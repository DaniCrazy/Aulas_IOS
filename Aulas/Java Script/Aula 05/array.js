// Aula 5 - Java Script

// Exemplo 1 - Uso do método array

let saborPizza = ['Marguerita' , 'Calabresa' , 'Frango' , 'Bacon' , 'Escarola' , 'Alho' , 'Portuguesa' , 'Abobrinha' , 'Atum' , 'Chocolate']

console.log(saborPizza[3]); // localiza o elemento dentro do array. Ex.: BACON
console.log(saborPizza.length); // informa o tamanho do array. Ex.: 10

// Adicionar um item no array utilizando um método de array do Java Script

saborPizza.push('Romeu e Julieta'); // insere um elemento dentro do array. Ex.: ROMEU E JULIETA
console.log(saborPizza);

delete saborPizza[3]; // exclui um elemento do array conforme indicado, e deixa um espaço vazio. Ex.: BACON
console.log(saborPizza);

// saborPizza.splice([3], 0, 'teste');
// console.log(saborPizza);

saborPizza[3] = "teste";
console.log(saborPizza);
