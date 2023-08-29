// Operaciones en los arreglos

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

// Anadir elementos al array
//tecnologias.push('GraphQL') // Anade al final del array
//tecnologias.unshift('GraphQL') // Anade al inicio del array
//no se deben utilizar estas funciones en el Riach


//const nuevoArreglo = [...tecnologias, 'GraphQL'] estos dos son los que se deben utilizar
//const nuevoArreglo = ['GraphQL', ...tecnologias]

// Eliminar elementos del array
//tecnologias.pop() // Elimina del final
//tecnologias.shift() // Elimina del Inicio
//tecnologias.splice(2, 3) // Elimina de una posicion en especifica

// Metodo que se llama filter e itera
//const nuevoArray = tecnologias.filter( function (tech) {
//    return tech !== 'HTML'
// })



// Reemplazar elementos del array
// tecnologias[0] = 'GraphQL'

const nuevoArray = tecnologias.map(function (tech) {
    if(tech === 'HTML') {
        return 'GraphQL'
    } else {
        return tech
    }
})




console.table(tecnologias)
console.table(nuevoArray)