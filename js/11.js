// iteradores en JS

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

// forEach - se va a ejecutar una vez por cada elemento que hay en el arreglo

tecnologias.forEach( function (tech) {
    console.log(tech)

})


tecnologias.map( function (tech) {
    console.log(tech)

})

// Crear un nuevo array
const arrayMap = tecnologias.map( function (tech) {
    return tech
})

// forEach - Acceder a cada elemento del array
//const arrayForEach = tecnologias.forEach( function (tech) {
//    return tech
//})

console.log(arrayMap)
console.log(arrayForEach)