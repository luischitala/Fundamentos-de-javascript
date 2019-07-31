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
// si se quiere especificar mas
// const esAlta =({altura}) => altura > 1.6

// var personasAltas = personas.filter(function (persona))
//{
//	return persona.altura > 1.6s
//}


var personas = [luis, montse, maritza, cesar, eduardo, miguel]


const esAlta = (persona) => persona.estatura > 1.6
const esBaja = (persona) => persona.estatura < 1.6
var personasBajas = personas.filter(esBaja)
var personasAltas = personas.filter(esAlta)

console.log(personasAltas)
console.log(personasBajas)

for (var i = 0; i < personas.length; i++)
{
	var persona = personas[i]
	console.log(`${persona.nombre} mide ${persona.estatura} metros `)
}

console.log(personasBajas)
for (var i = 0; i < personas.length; i++)
{
	var persona = personas[i]
	console.log(`${persona.nombre} mide ${persona.estatura} metros `)
}