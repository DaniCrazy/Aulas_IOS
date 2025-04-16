// Aula 4 - Java Script

// Exemplo 1: Uso de operadores lógicos (&&)

let carro = true
let cnh = true
let chave = true

if (carro && chave && cnh) {
    console.log('vrum vrum')
} else {
    console.log('não vrum')
}

// Exemplo 2: Uso de operadores lógicos (&&, !)

let carro2 = true
let cnh2 = false
let chave2 = true

if (carro2 && chave2 && !cnh2) {
    console.log('vrum vrum')
} else {
    console.log('não vrum')
}