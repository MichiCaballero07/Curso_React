// Condicionales ternarios

const autenticado = true

// lo que esta diciendo el signo de interrogación a la derecha, pero antes de estos dos puntos es lo que se ejecuta si esta condicion se cumple

autenticado ? 
    console.log('usuario autenticado') : 
    console.log('No autenticado, dirigir hacia login')

// si pongo un signo de exclamación antes esto esta negando esta condicion

!autenticado ? 
    console.log('usuario autenticado') : 
    console.log('No autenticado, dirigir hacia login')

// Doble ternario

const saldo = 600
const pagar = 800
const tarjeta = true

saldo > pagar ?
    console.log('Puedes pagar con saldo') :
    console.log('No puedes pagar con saldo')

    saldo > pagar ?
    console.log('Puedes pagar con saldo') :
    tarjeta ? 
        console.log('Puedes pagar con tarjeta') :
        console.log('No puedes pagar con saldo')

        // esta sintaxis se utiliza demaciado en Riac
        