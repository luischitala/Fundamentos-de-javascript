var luis = 
{
	nombre: "Luis",
	apellido: "Chitala",
	edad: 23,
	ingeniero: true,
	cocinero: true,
	cantante: false,
	dj: false,
	guitarrista: true,
	drone: false
}

function imprProfesiones(persona)
{
	console.log(`${persona.nombre} es: ` )
	if(persona.ingeniero)
	{
	console.log(`Ingeniero`)
	}
	if(persona.cocinero )
	{
	console.log(`Cocinero`)
	}
	if(persona.guitarrita )
	{
	console.log(`Guitarrista`)
	}
	if(persona.dj )
	{
	console.log(`DJ`)
	}
	if(persona.drone)
	{
	console.log(`Vuela drones`)
	}
}

const MAYORIA_DE_EDAD =18

function esMayorDeEedad(persona)
{
	return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(persona)
{
	if(esMayorDeEedad(persona))
	{
		console.log(`${persona.nombre} es mayor de edad`)
	}
	else
	{
		console.log(`${persona.nombre} es menor de edad`)
	}
}

imprimirSiEsMayorDeEdad(luis)