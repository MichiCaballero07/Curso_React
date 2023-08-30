// Funciones - function Expression

// Pregunta para obtener un trabajo
//¿cual es la diferencia entre function Expression y Function declaration



//no puede acceder a sumar antes de inicializarlo en cambio en function declaration puede ir antes o despues por que registra todas las funciones en una fase de creación, en la segunda las ejecuta, por lo tanto no importa 
const sumar = function(numero, numero2) {
    console.log( numero + numero2)
}

const resultado = sumar(30, 20)

console.log(resultado)