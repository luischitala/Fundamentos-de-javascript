var sacha = {
	nombre: "Luis",
	apellido: "Chitala",
	edad: 28 
}

var dario = {
	nombre: "Dario",
	apellido: "Susnisky",
	edad: 27 
}

function imprimirNombreEnMayusculas(persona)
{
	var { nombre } = persona
	console.log(nombre.toUpperCase() )
	
}

function presentarse(persona)
{
	var {nombre} = persona
	var {apellido} = persona
	var {edad} = persona

	console.log("Hola soy " + nombre.toUpperCase() + " " + apellido.toUpperCase() + ", y tengo " + parseInt(edad) + " Anos")
}

presentarse(sacha)
presentarse(dario)
imprimirNombreEnMayusculas(sacha)
imprimirNombreEnMayusculas(dario)
