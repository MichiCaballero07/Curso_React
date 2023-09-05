function sumar(numero1, numero2) {
    return numero1 + numero2;
}
// esto lo que hace es que registra esta funcion y despues le estamos diciendo que la exporte
export default sumar

function restar(numero1, numero2) {
    return numero1 - numero2
}

// Para exportar multiples funciones tiene que utilizar el export y como si fuera un objeto

export {
    sumar,
    restar
}

// Opciones Modernas - Para Crear Apps en React
// Vite
// Next.js
// Remix Run - para crear tiendas virtuales
// Hydrogen

// Otras Opciones - Ya no tan utilizadas
// Create React App
// Gatsby

// El equipo de React ha mencionado en su documentación que recomiendan Next.js o Remix para nuevos proyectos
