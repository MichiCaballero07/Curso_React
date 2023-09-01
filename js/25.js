// Eventos del DOM - Inputs

const inputNombre = document.querySelector('.nombre')
inputNombre.addEventListener('input', function(e) {
    //console.log('Escribiendo en el input')
    console.log(e.target.value)
})


// Keydown - es comun cuando escribes o presionas 
// Keyup - Cuando presionas y levantas la tecla

const inputPassword = document.querySelector('.password')
inputPassword.addEventListener('input', funcionPassword)

function funcionPassword(e) {
    inputPassword.type = 'text'

    setTimeout(() => {
        inputPassword.type = 'password'
    }, 250); // forma de retrasar la ejecucion del codigo esto equivale a medio segundo
}
