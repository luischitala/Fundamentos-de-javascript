var luis = 
{
	nombre: "Luis",
	apellido: "Chitala",
	edad: 17,
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

const MAYORIA_DE_EDAD = 18
const MENOR_DE_EDAD  = 17

//const esMayorDeEdad = function(persona)
//{
	//return persona.edad >= MAYORIA_DE_EDAD
//}
//const esMayorDeEedad = persona => persona.edad >= MAYORIA_DE_EDAD
const esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD
function imprimirSiEsMayorDeEdad(persona)
{
	if(esMayorDeEdad(persona))
	{
		console.log(`${persona.nombre} es mayor de edad`)
	}
	else
	{
		console.log(`${persona.nombre} es menor de edad`)
	}
}
//const esMenorDeEdad = ({edad}) => edad <= MENOR_DE_EDAD
//function imprimirSiEsMenorDeEdad(persona)
//{
//	if(esMenorDeEdad(persona))
//	{
//		console.log(`${persona.nombre} es menor de edad`)
//	}
//}

function permitirAcceso(persona)
{
	if(!esMayorDeEdad(persona))
		console.log("Acceso Denegado")
}

imprimirSiEsMayorDeEdad(luis)
permitirAcceso(luis)