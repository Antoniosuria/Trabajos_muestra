// var legal = prompt('Cual es tu edad?')
// var number1 = 18

// if(legal > number1){
//    alert('Avanzar')
// }else{
//     alert('stop')
// }

//operadores logicos 
//AND
// console.log('palabra' == 'palabra' && 'adios' == 'adios'); //true
// console.log('palabra' == 'palabra' && 'adios' == 'adios');//false
// console.log('palabra' == 'palabra1' && 'adios' == 'adios');//false
// console.log('palabra' == 'palabra' && 'adios1' == 'adios');//false
// console.log('palabra' == 'palabra' && 'adios' == 'adios1');//false

// //or
// console.log('palabra' == 'palabra' || 'adios' == 'adios'); //true
// console.log('palabra' == 'palabra' || 'adios' == 'adios');//true
// console.log('palabra' == 'palabra1' || 'adios' == 'adios');//true
// console.log('palabra' == 'palabra' || 'adios1' == 'adios');//true
// console.log('palabra' == 'palabra' || 'adios' == 'adios1');//true
// console.log('palabra1' == 'palabra' || 'adios' == 'adios1');//false

// var username = prompt('Escribe tu username')
// var password = prompt('Escribe tu contrasena')


// if(username == username && password == password2){
//     alert('Bienbenido')
// }else{
//     alert('incorrecto')
// }

//Hacer el juego de piedra, papel o tijera
var j1 = prompt('jugador 1: Elige piedra, papel o tijera')
var j2 = prompt('jugador 2: Elige piedra, papel o tijera')

if(j1 == 'piedra' && j2 == 'papel' || j1 == 'papel' && j2 == 'tijera' || j1 == 'tijera' && j2 == 'piedra'){
    alert('Punto para j2')
} else if(j1 == 'tijera' && j2 == 'papel' || j1 == 'piedra' && j2 == 'tijera' || j1 == 'papel' && j2 == 'piedra'){
    alert("Punto para j1")
} else if(j1 == 'papel' && j2 == 'papel' || j1 == 'tijera' && j2 == "tijera" || j1 == 'piedra' && j2 == "piedra" ){
    alert('Empate')
}