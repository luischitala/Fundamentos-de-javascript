class Persona {
	constructor(nombre, apellido, estatura)
	{
	this.nombre = nombre
	this.apellido = apellido
	this.estatura = estatura
	}

	saludar()
	{
		console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
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
	saludar()
	{
		console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
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
//var erika = new Persona("Erika", "Roman", 1.88)
//var arturo = new Persona("Arturo", "Gomez", 1.99)
///var maura = new Persona("Maura","Castañeda", 1.55)



