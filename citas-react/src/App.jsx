import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"


//JSX JavaScript Syntax Extension - es una extensión desarrolada por Facebook para React
// básicamente es un lenguaje de Template que muestra HTML pero tiene todas las funciones de JavaScript
// se va a dividir en dos partes en lo que se pone dentro de la funcion y lo que se pone en el return
function App() {




  return (
    <>
      <Header/>
      <Formulario/>
      <ListadoPacientes/>
    </>
  )
}

export default App
//antes del return 
// Todo lo que este dentro de este return es lo que se va a ver en pantalla 
//toLowerCase me convierte todo en minusculas
//toUpperCase me convierte todo en mayusculas