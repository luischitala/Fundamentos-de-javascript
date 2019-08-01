class Persona {
	constructor(nombre, apellido, estatura)
	{
	this.nombre = nombre
	this.apellido = apellido
	this.estatura = estatura
	}

	saludar(fn)
	{
		var {nombre, apellido} = this
		console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
		if (fn){
			fn(nombre,apellido)
		}
	}
	soyAlto()
	{
		return this.estatura > 1.80

	}
}

class Desarrollador extends Persona
{
	constructor(nombre, apellido, altura)
	{
		super(nombre,apellido,altura)
		
	}
	saludar(fn)
	{
		var {nombre, apellido} = this
		//var nombre = this.nombre
		//var apellido = this.apellido
		console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
		if (fn) {
			fn(nombre,apellido,true )
		}
	}

}

function responderSaludo(nombre,apellido,esDev)
{
	console.log(`Buen dia ${nombre} ${apellido}`)
	if (esDev)
	{
		console.log(`Ah, mira no sabia que eras dev`)
	}
}

//function Desarrollador(nombre,apellido,estatura)
//{
	//this.nombre = nombre
	//this.apellido = apellido
	//this.estatura = estatura

//}


Desarrollador.prototype.saludar = function ()
{
	console.log(`Hola, me llago ${this.nombre} ${this.apellido} y soy desarrollador`)
}


var luis = new Persona("Luis", "Chitala", 1.65)
var erika = new Desarrollador("Erika", "Roman", 1.88)
var arturo = new Desarrollador("Arturo", "Gomez", 1.99)
var maura = new Persona("Maura","Castañeda", 1.55)


luis.saludar(responderSaludo)
arturo.saludar(responderSaludo)
erika.saludar(responderSaludo)