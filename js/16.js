const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']
const numeros = [10, 20, 30]



// Filter va a traer los que cumplan o los que sean diferentes a la condición que coloques aquí



nuevoArray = tecnologias.filter( tech => tech !== 'HTML')

// Comprobar si un elemento existe en el array
//const resultado = tecnologias.includes('HTML')


// Some te va a decir si almenos un elemento cumple con condición
// const resultado = numeros.some( numero => numero > 15)

// Find - Devuelve el primer elemento que cumpla la condición 

// const resultado = numeros.find( numero => numero > 5)

// Every - Retorna true o false si todos cumplen la condición
//const resultado = numeros.every( numero => numero > 9)

// Reduce - Acumulando en el total
// const resultado = numeros.reduce( (total, numero) => numero + total, 0 )

// Filter - Crea un nuevo array en base a una condición
//const resultado = tecnologias.filter( tech => tech !== 'JavaScript' )
const resultado = numeros.filter( numero => numero > 15)
//console.log(nuevoArray)
//console.log(resultado)

// map lo utilizas cuando quieras retornar un nuevo arreglo
const arrayMap = tecnologias.map( function (tech) {
    return tech
})

// forEach - Acceder a cada elemento del array
// forEach - lo vas utilizar unicamente cuando quieras iterar
// si tiene mas de dos parametros tiene que tener () 
tecnologias.forEach( (tech, index) => console.log(index) )

console.log(arrayMap)