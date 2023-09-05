// Fetch API
// es la forma en que puedes consumiruna API o un servicio que está hospedado a otro servidor
// podemos utilizar la api {JSON} Placeholder

const url = "https://jsonplaceholder.typicode.com/comments"

// le estoy diciendo que esta respuesta la queremos como jeyson

const consultarAPI = () => {
    fetch(url)
        .then((respuesta) => respuesta.json())
        .then(resultado => {
            resultado.forEach(comentario => {
                console.log(comentario)
            })
        })
}
consultarAPI();

// Usualmente esto lo ponemos en una función
