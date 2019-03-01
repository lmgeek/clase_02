/*
Primitivos (String-Number-Boolean-NULL-undefined)
Objetos(Object-Array-Function)

https://developer.mozilla.org/es/docs/Web/API
*/

var a = 1
//window.a = 1

//window.Persona = function Persona(){}
/*function Persona(){
	console.log(this)
}

Persona() //window{}
*/

function ctx(a,b){
	console.log("Parametros:",a,b)
	console.log("Contexto: ",this)
	console.log("**********************")
}

ctx(1,2)	 					//1 2 window{}
//CALL y APPLY : Ejecutan la funcion
ctx.call({ctx:"call"},10,20)	//10 20 {ctx:"call"}
ctx.apply({ctx:"apply"},[100,200])//100 200 {ctx:"apply"}
//BIND : Retorna la definicion de la funcion
ctx.bind({ctx:"bind"},1000,2000)


//NEW : Ejecuta la funcion que tiene al lado reasignandole  el contexto con un objeto vacio. Al finalizar la ejecucion de la funcion, retorna ese objeto que creo. 

new ctx(1,2)

/*
new ctx

let a = {}
ctx.call(a)
return a
*/

/*
Function.call()
Function.apply()
Function.bind()
new Funcion
*/

//Contexto : El contexto de una funcion, en lineas generales , nos va a dar una referencia de que objeto contiene a esa funcion y esta en la variable this. No es estatico y puede variar por lugar de ejecucion o desicion del programador.

/*

function foo(a,b,e){
	console.log(a,b,e)
}

document.addEventListener("click",function(e){
	foo(1,2)
})

document.addEventListener("click",foo.bind(null,1,2))
*/


/*
let persona = {
	saludo : function(){},
	constructor : function Fizzmod(){}
}

let instancia_uno = Object.create(prototipo_uno)
*/

/*

CLOSURE : 

*/

console.clear()

function externa(x){
	
	console.log(x)
	let b = true

	return function interna(y){
		console.log(y+x+b)
	}


}

let retorno = externa(10)
retorno(20)


/*
class Persona {

	private $nombre;

	public function getNombre(){
		return $nombre;
	}

}
*/

function Persona(){
	//atributo "privado" de clase que le pertenece al closure de la funcion que la use
	let nombre = "Horacio"

	function metodoPrivado(){}

	this.getMetodoPrivado = function(){
		return metodoPrivado()
	}

	//Metodo publico de instancia que guarda como referencia el atributo "privado" del closure
	this.getnombre = function(){
		console.log(nombre)
	}
}

let juanes = new Persona()



let b = () => {}




function Persona(nombre){
	this.nombre = nombre
	Persona.prototype.saludo = function(){}
}

let juana = new Persona("juana")



class Personas {

	constructor(nombre){
		this.nombre = nombre
	}

	saludo(){

	}

}

let juan = new Persona("Juan");




//IIFE = Immediatly Invoked Function Expression
(function(){


})();
(function(){

})();




function test(){

	foo()

	
	return
	
	function foo(){
		console.log("FOO")
	}
	
}
test()

/*
HEAP : Decalracion de variables y funciones
STACK : Asignacion de valores y ejecucion en orden
*/
var a = 1
console.log(a)

function foo(){}
foo()
//-----------------------------//
var a;
function foo(){}
a = 1
console.log(a)
foo()
