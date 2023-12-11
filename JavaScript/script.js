//Comentario de una sola línea

/*comentario
multilinea*/


//alert("Hola mundo");


/*console.log("Este es un mensaje para mi consola")*/


/*var nombre=prompt ("Ingresa tu nombre");
alert("Hola," + nombre+" Bienvenida a la CH35");*/


/* var numero1=parseInt(prompt ("ingresa el primer numero:"));
var numero2= parseInt(prompt ("ingresa el segundo numero:"));

console.log ("suma:"+ (numero1 + numero2));
console.log ("resta:"+ (numero1 - numero2));
console.log ("multiplicación:"+ (numero1 * numero2));
console.log ("división:"+ (numero1 / numero2)); */

/*var nombre=prompt ("Ingresa tu nombre");
var edad= prompt("Ingresa tu edad");
if(edad <17){
    alert(nombre+".Tas chavo, chavo");
}
else{
    alert(nombre+ ".Ya te sabes la de chambear");
} */

//scope es el alcance de nuestras variables 
/* var, let, const la diferencia  es el alcance
var tiene un alcance global
let tiene un alcance local
const se mantiene sin ningun cambio*/

/*string:cadena de texto (lleva comillas)
number:numero
noolena:true/false
null:nulo
undefinied: no está asignado o definido */

/*Todas nuestras variabless deben ser declarados con nombres específicos y claros, sin espacios, no deben iniciar con números*/

let nombre = "Daniel";
let invitadosExtras=2;
let esMayorEdad= true;
let edad=24;
let invitadoEspecial=null;
let horaDeSalida= undefined;



//document.write(nombre);

/*Encasillamiento o tipado
Sirve para el manenimiento del código ya que lo hacen más legible y fácil de entender, nos ayuda a la prevención de errores para reducir la probabilidad de los mismos.
Mejora el rendimiento de nuestro programa*/

/*let numero = 15;
let texto ="hola";

//con encasillamiento 

let numeroEncasillado= Number= 5;
let textoEncasillado= String= "hola";*/

/*typeof palabra reservada para saber qué tipo de dato tenemos 

console.log(typeof(nombre));

let funcionNumber = console.log (typeof Number(nombre));
metodoParseInt = console.log(typeof parseInt (nombre));

metodoParseFloat=console.log(typeof parseFloat(nombre));
parseInt y parseFloat son funciones que se utilizan para convertir cadenas de texto en números, ambas nos ayudan en este cambio*/

/*conversion de number a string 

console.log(typeof String(edad));
console.log(typeof edad.toString());

Conversión de boolean a number

let numero = Number(esMayorEdad);

console.log(typeof(numero));

let texto = String(esMayorEdad);

console.log(typeof(texto));

console.log (typeof esMayorEdad.toString());

let negación = !esMayorEdad;

console.log(negación); */


//Concatenar es unir Strings 

let saludo= "Hola humano";

let frase= " el futuro es hoy";

texto= saludo+frase

document.write(texto);

console.log(texto);