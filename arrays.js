var luis = {
	nombre:"Luis",
	apellido: "Chitala",
	estatura: 1.75,
	cantidadDeLibros: 20
}

var montse = {
	nombre: "Montserrat",
	apellido: "Wimber",
	estatura: 1.50,
	cantidadDeLibros: 29
}

var maritza = {
	nombre: "Maritza",
	apellido: "Chitala",
	estatura: 1.70,
	cantidadDeLibros: 76
}

var cesar = {
	nombre:"Cesar",
	apellido: "Roman",
	estatura: 1.70,
	cantidadDeLibros: 23
}

var eduardo = {
	nombre: "Eduardo",
	apellido: "Rello",
	estatura: 1.74,
	cantidadDeLibros: 14

}

var miguel = {
	nombre: "Miguel",
	apellido: "Vega",
	estatura: 1.70,
	cantidadDeLibros: 4
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
//Un nuevo objeto 
//const pasarEstaturaACms = persona => {
//	return {
//		...persona,
//		altura: persona.estatura * 100
//	}
//}
const pasarEstaturaACms = persona => ({

		...persona,
		altura: persona.estatura * 100
	
})

var personasCms= personas.map(pasarEstaturaACms)

var acum = 0
//for (var i=0; i< personas.legth; i ++)
//{
//	acum = acum + persona[i].cantidadDeLibros
//}
const reducer = (acum, persona) => {
	return acum + persona.cantidadDeLibros
}
var totalDeLibros = personas.reduce(reducer,0)

console.log(`En total todos tienen ${totalDeLibros} libros`)

console.log(personasCms)
console.log(personasBajas)

for (var i = 0; i < personas.length; i++)
{
	var persona = personas[i]
	console.log(`${persona.nombre} mide ${persona.estatura} metros `)
}
