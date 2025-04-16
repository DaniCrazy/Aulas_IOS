// Aula 4 - Java Script

// Exemplo 3: Uso de operadores lógicos (&&)

let cafe  = true
let leite = true
let pao = true

if (cafe && leite && pao) {
    console.log('Café gostoso !')
}

// Exemplo 4: Uso de operadores lógicos (&&, !)

let cafe2  = true
let leite2 = false
let pao2 = true

if (cafe2 && !leite2 && pao2) {
    console.log('Café gostoso !')
} else {
    console.log('Odeio leite !')
}


// Exemplo 5: Uso de operadores lógicos (||)

let cafe3 = true
let leite3 = true
let pao3 = true

if (pao3 || leite3 || cnh2) {
    console.log('Café gostoso !')
} else {
    console.log('Café ruim !')
}

// aqui vai dar sempre "café gostoso" porque foi usado o "ou", então todas as opções são satisfatórias 