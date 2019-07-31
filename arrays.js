var luis = {
	nombre:"Luis",
	apellido: "Chitala",
	estatura: 1.75
}

var montse = {
	nombre: "Montserrat",
	apellido: "Wimber",
	estatura: 1.50
}

var maritza = {
	nombre: "Maritza",
	apellido: "Chitala",
	estatura: 1.70
}

var cesar = {
	nombre:"Cesar",
	apellido: "Roman",
	estatura: 1.70
}

var eduardo = {
	nombre: "Eduardo",
	apellido: "Rello",
	estatura: 1.74
}

var miguel = {
	nombre: "Miguel",
	apellido: "Vega",
	estatura: 1.70
}

var personas = [luis, montse, maritza, cesar, eduardo, miguel]
for (var i = 0; i < personas.length; i++)
{
	var persona = personas[i]
	console.log(`${personas.nombre} mide ${persona.estatura} metros `)
}