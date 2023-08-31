// Manipular elementos HTML con JS

const heading = document.querySelector('.heading')
// estoy seleccionando el elemento, accedo al text content y le asigno uno nuevo
heading.textContent = 'Un Nuevo Heading'
console.log(heading)

//const inputNombre = document.querySelector('#nomre')
//inputNombre.value = 'Un valor por default'

const enlaces = document.querySelectorAll('.navegacion a')
enlaces.forEach( enlace => enlace.textContent = 'Nuevo enlace')


