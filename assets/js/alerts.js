//Declaracion de async
const verificar = async(nombre) => {		
	if ( !nombre ) {
		throw "no hay nombre"		
	}	
	return nombre;
}

let input1 = prompt("Persona 1:");

//Declaracion de then
const saludo = (nombre) => {
console.log("hola " + nombre);
}

//Declaracion de catch
const mensajeError = (error) => {
console.log(error);
}

//Llamado de promesa
verificar(input1)
.then(saludo)
.catch(mensajeError);

const mensaje = () => {
	console.log("codigo sincrono")
}

setTimeout(mensaje,10000)



