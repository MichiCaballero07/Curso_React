// Objectos - Manipulacion 

const producto = {
    nombre: "tablet",
    precio: 300,
    disponible: true
}

// con object freeze no se puede ni reescribir, anadir o eliminar
//Object.freeze(producto) - No te deja modificar

// Te permite reescribir las propiedades existentes, pero no te permite anadir ni eliminar 
//Object.seal(producto) - Modificar propiedades existentes, no permite anadir ni eliminar


// aqui dice const pero puedes modificar las propiedades de un objeto

//Reescribir un valor
producto.nombre = "Monitor Curvo"

// Si no existe, lo va a anadir
producto.imagen = "imagen.jpg"


delete producto.disponible

console.table(producto)