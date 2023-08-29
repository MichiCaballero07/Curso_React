//Unir 2 Objetos o mas

const producto = {
    nombre: "tablet",
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: 'Michi',
    premium: true
}

//const nuevoObjeto = Object.assign(producto, cliente) // No, este modifica el original
// Existen formas o metodos que mutan o modifican arreglos de objetos originales
const nuevoObjeto2 = { 
    producto: {...producto},
    cliente: {...cliente}  
}
console.log(nuevoObjeto2)
console.log(cliente)
console.log(producto)
