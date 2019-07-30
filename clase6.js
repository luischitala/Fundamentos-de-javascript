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

function imprimirNombreEnMayusculas({nombre,apellido})
{

	console.log(nombre.toUpperCase() + " "+ apellido.toUpperCase())
	
}

imprimirNombreEnMayusculas(sacha)
imprimirNombreEnMayusculas(dario)