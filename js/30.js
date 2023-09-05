// Fetch API - Async Await
// algo importatnte es que cuando utilizas Async Await, tus funciones tienen que ser asíncronas
const url = "https://jsonplaceholder.typicode.com/comments"

// le estoy diciendo que esta respuesta la queremos como jeyson

const consultarAPI = async () => {
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    resultado.forEach( comentario => {
        console.log(comentario)
    })
}
consultarAPI();

// Ese await lo que hace es bloquear el código, es decir en lo que nosotros hacemos el llamado a la url 