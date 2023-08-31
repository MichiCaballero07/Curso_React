


const saldo = 600
const pagar = 500
const tarjeta = true


if(saldo > pagar) {
    console.log('puedes pagar con tu saldo')
} else if(tarjeta) {
    console.log('Puedes pagar con tu tarjeta')
} else {
    console.log('No, no puedes pagar')
}

// Lo que hace esto || es mirar si alguna de las condiciones se cumplen
// lo que hace esto && es que ambas condiciones se tienen que cumplir 
if(saldo > pagar || tarjeta) {
    console.log('puedes pagar')
}  else {
    console.log('No, no puedes pagar')
}

/*
    || - Al menos una debe cumplirse
    && - Todas deben de cumplirse
*/
