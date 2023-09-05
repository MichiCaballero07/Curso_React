// Template Strings

const producto = "Tablet de 12 pulgadas"
const precio = 400
const marca = "Orange"


function textoDeFuncion() {
    return "Este texto proviene de la función"
}

// forma de Concatenar en Javascript
console.log( producto + " $" + precio + " Dolares, Marca: " + marca )

// Está sintaxis esta más clara, más moderna y la mås utilizada
console.log(`${producto} $${precio} Dolares, Marca: ${marca}, ${textoDeFuncion()}`)