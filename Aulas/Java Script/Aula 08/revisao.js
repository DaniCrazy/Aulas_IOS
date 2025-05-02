for (contador = 2; contador <= 10; contador = contador + 2) {
    console.log(contador);
}



for (contador = 2; contador <= 10; contador += 2) {
    console.log(contador);
}



let cafe = true

do {
    console.log('Shadow bebeu café');
    
} while (cafe == true) {

}


let numero = 50

while (numero < 50) { 
    console.log('Pamonha 🌽');
}

do {
    console.log('Pamonha 🌽 bem quentinha');

} while (numero < 50)


<script>
let senha = 123

do {
    entradaUsuario = prompt('Digite sua senha')
} while (entradaUsuario != senha)

</script>