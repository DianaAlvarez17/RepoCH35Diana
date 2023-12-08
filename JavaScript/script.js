//Comentario de una sola línea

/*comentario
multilinea*/


//alert("Hola mundo");


console.log("Este es un mensaje para mi consola")


/*var nombre=prompt ("Ingresa tu nombre");
alert("Hola," + nombre+" Bienvenida a la CH35");*/


/* var numero1=parseInt(prompt ("ingresa el primer numero:"));
var numero2= parseInt(prompt ("ingresa el segundo numero:"));

console.log ("suma:"+ (numero1 + numero2));
console.log ("resta:"+ (numero1 - numero2));
console.log ("multiplicación:"+ (numero1 * numero2));
console.log ("división:"+ (numero1 / numero2)); */

var nombre=prompt ("Ingresa tu nombre");
var edad= prompt("Ingresa tu edad");
if(edad <17){
    alert(nombre+".Tas chavo, chavo");
}
else{
    alert(nombre+ ".Ya te sabes la de chambear");
}