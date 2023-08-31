// Selectores del Dom
// Dom "Modelo de Objectos de Documento" este es esencial para la interectividad en la web
/*
    cambiar el contenido de la página en tiempo real 
    Modificar los estilos y la apariencia de los elementos
    Agregar, eliminar o modificar elementos y atributos
    Responder a eventos del usuario, como hacer clic en un botón o enviar un formulario

    Este es el que permite a los desarrolladores interactuar con la página 
    y crear experiencias interactivas en linea
*/

const heading = document.querySelector('.heading') // querySelector te va a retornar solo un elemento

//console.log(heading)
//console.log(heading.textContent) //
//console.log(heading.tagName)
//console.log(heading.classList)
//console.log(heading.id)


const enlaces = document.querySelectorAll('.navegacion a')

// si utilizas queryselectAll tienes que iterar sobre ellos 
console.log(enlaces)
