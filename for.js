var luis = 
{
	nombre: "Luis",
	apellido: "Chitala",
	edad: 28,
	peso: 75
}

console.log(`Al inicio del año ${luis.nombre} pesa ${luis.peso.toFixed(2)}kg`)

// function aumentarDePeso (persona)
//{return persona.peso += 200
//}
const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -=INCREMENTO_PESO
for(var i = 1; i <= DIAS_DEL_ANO; i++)
{
	var random = Math.random()
	if (random < 0.25)
	{
		aumentarDePeso(luis)
	}
	else if (random < 0.25)
	{
		adelgazar(luis)
	}
}


console.log(`Al final del año ${luis.nombre} pesa ${luis.peso.toFixed(2)} kg`)
