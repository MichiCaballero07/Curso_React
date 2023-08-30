// Comparacion y Operador Estricto

const numero1 = 20
const numero2 = "20"

if(numero1 === numero2) {
    console.log('Si!, son iguales')
} else {
    console.log('No, no son iguales')
}



if(numero1 === Number(numero2)) {
    console.log('Si!, son iguales')
} else {
    console.log('No, no son iguales')
}

if(String(numero1) === numero2) {
    console.log('Si!, son iguales')
} else {
    console.log('No, no son iguales')
}
console.log(typeof numero1)
console.log(typeof numero2)
/**
 *  == (Comparación pero no es estricto)
 * === (Comparación estricta - Revisa valor y tipo de dato)
 * 
 */

const autenticado = true

if(autenticado === true) {
    console.log('Si esta autenticado')
}


if(autenticado) {
    console.log('Si esta autenticado')
}