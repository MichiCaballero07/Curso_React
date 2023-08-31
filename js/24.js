// Eventos de del DOM - Clicks
// el addEventListener va a estar esperando que suceda el evento que requiero
//const heading = document.querySelector('.heading')
//heading.addEventListener('click', function() {
    //console.log('Diste click en heading')
//})


const heading = document.querySelector('.heading')
heading.addEventListener('click', () => {
    heading.textContent = 'Nuevo Heading al dar clickk'
})


// No se puede asociar a multiples elementos tiene que ser a uno solo
// la solucion es iterar
const enlaces = document.querySelectorAll('.navegacion a')

enlaces.forEach( enlace => {
    enlace.addEventListener('click', () => {
        console.log('Diste click en un enlace')
    })
})
