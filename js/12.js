// Funciones - function Declaration
// los que están dentro de la función se les conoce como parametros
//function sumar(numero, numero2) {
  //  console.log(numero + numero2)
//}

//sumar(10, 20)
//sumar(2, 3)
//sumar(100, 400)
// a estos se les conoce como argumentos

//function sumar(numero, numero2) {
  //  return [ numero + numero2, 'Hola Mundo']
//}
//const [resultado, holaMundo] = sumar(20, 30)
//console.log(resultado)
//console.log(holaMundo)

// tambien se pueden meter un arreglo los arreglos son indexados

// mientras que los objetos requieren una propiedad

function sumar(numero, numero2) {
    return { 
        resultado:numero + numero2, 
        mensaje:'Hola Mundo'
        }
}
const {resultado, mensaje} = sumar(20, 30)
console.log(resultado)
console.log(mensaje)




