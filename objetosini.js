function Persona(nombre,apellido, estatura)
{
	this.nombre = nombre
	this.apellido = apellido
	this.estatura = estatura
}

Persona.prototype.saludar = function ()
{
	console.log (`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function ()
{
	return this.estatura > 1.80
}
var luis = new Persona("Luis", "Chitala", 1.65)
var erika = new Persona("Erika", "Roman", 1.88)
var arturo = new Persona("Arturo", "Gomez", 1.99)
var maura = new Persona("Maura","Castañeda", 1.55)



