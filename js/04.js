// Objetos - puede almacenar una gran cantidad de 
//todo lo que este dentro de las llaves es lo que le voy a poner, la coma (,) es oblligatoria y no se utiliza el = sino : 
const producto = {
    nombre: "tablet",
    precio: 300,
 disponible: true

}

console.log(producto)
console.table(producto)

console.log(producto.nombre)
console.log(producto.disponible)

//Destructuring - para extraer valores de este objeto esta sintaxis es mas moderno 

const { nombre, precio, disponible } = producto
console.log(nombre)
console.log(precio)
console.log(disponible)

