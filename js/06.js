// Objectos - Destructuring con 2 o mas objetos
// No se puede tener dos variables que se llamen igual en un archivo

const producto = {
    nombre: "tablet",
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: 'Michi',
    premium: true
}

const { nombre, precio, disponible } = producto
const { nombre: nombreCliente, premium } = cliente


console.log(nombre, precio, disponible)
console.log(nombreCliente)

// este codigo va hacer muy util cuando van a ver variables con nombres que ya tienes