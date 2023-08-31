// Scope - Alcance que tiene una variable

const precio = 300

// las variables pueden ser repetidas, se pueden volvel a declarar siempre y cuando esten dentre de las llaves {}
function unaFuncion() { 
    const precio = 600
    console.log(precio)
}

if(true) {
    console.log(precio)
}


unaFuncion() //