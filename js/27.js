// Generando código HTML con JavaScript
const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', e => {
    e.preventDefault()

    const nombre = document.querySelector('.nombre').value
    const password = document.querySelector('.password').value

    // Debo comenzar hacer una alerta Recomienda poner en JavaScript el DIV en mayuscula
    const alert = document.createElement('DIV')
    

    if(nombre === '' || password === '') {
        console.log('Todos los campos son obligatorios')
    } else {
        console.log('Todos bien, enviando...')
    }

})