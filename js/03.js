// Tipos de datos


//undefined - es un tipo de dato que se asigna cuando creas una variable automáticamente desde el momento en que se crea, si no le has asignado un valor, ya es de tipo undefined

//Esto pasa por que JavaScript es un lenguaje dínamico ya que el tipo de dato se almacena en el valor, no en la variable

//let cliente
//console.log(cliente)
//console.log(typeof cliente)

//Boolean - basicamente es True or False
//const descuento = false
//console.log(descuento);
//console.log(typeof descuento);

//Number - existen por ejemplo números enteros, flotantes, etc.
//const numero1 = 20.20
//const numero2 = 30
//const numero3 = 100

//console.log(typeof numero1)
//console.log(typeof numero2)
//console.log(typeof numero3)

//strings o cadenas de texto llevan comillas
//const alumno = "juan"
//let producto = "Monitor 20 pulgadas"

//const numero = "30"
//const numero2 = 30

//console.log(typeof numero)
//console.log(typeof numero2)

//BigInt - Constructor para representar números muy grandes en JavaScript - No se pueden mezclar con cualquier tipo de dato

//const numeroGrande = BigInt(1561486432132165456456513202516)

//En javaScript hay algo que se llama cohersion, que es donde básicamente con una función o de forma con una sintaxis cambias el typo de dato de un valor, la utilizamos de forma implicita o explicita para cambiar un typo de dato

//const numero = "30"
//const numero2 = 30

//console.log(typeof numeroGrande)
//console.log(numero + Number(numeroGrande))

//console.log(numero + numero2)

//console.log(typeof String(numero2))
//console.log(typeof Number(numero))

//Symbol - su caracteristica principal es que es un dato único
//const primerSymbol = Symbol(30)
//const segundoSymbol = Symbol(30)

//console.log(primerSymbol === segundoSymbol)
//console.log(primerSymbol.valueOf())

//los Symbol siempre son diferentes

//Null - Valor nulo o vacio
//const descuento = null
//console.log(typeof descuento)

