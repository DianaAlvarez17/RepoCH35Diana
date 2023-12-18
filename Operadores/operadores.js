/* Operador 
Signo que determinan la operación. Es un signo que específica que debe efectuar una determinada operación */


/* Operadores aritmeticos (+,-,*,/,++,--)*/
/* Operadores de asignación (=) */
/* Operadores lógicos (&&, ||, !)
Operadores de comparación (==, ===, !== ,<,>, >=,<=)
Operadores de cadena (toLoweCase, toUpperCase, trim, toString, concat, +)*/


/*
Operadores aritméticos 

(+): Suma,  Se utiliza para sumar dos números
(-) Resta, se utiliz para restar un número de otro. 
(*): multiplicación, se utiliza para multiplicar dos números 
(/): división, se utiliza para dividir un número entre otro. 
(%): residuo, se utiliza para obtener el resto de una división.
(++): incremento, aumentar de uno en uno la cantidadd o el numero
(--) :decremento, disminuye de uno en uno la cantidad o el número. 

*/


let numero1= 10;
let numero2=8;

suma= numero1+numero2;
resta= numero1-numero2;
multiplicación= numero1*numero2;
división= numero1/numero2;
residuo=numero1%numero2;
incremento=numero1
incremento++;
decremento=numero2
decremento--;

console.log(suma);
console.log(resta);
console.log(multiplicación);
console.log(división);
console.log(residuo);
console.log(incremento);
console.log(decremento);




let precioReal=1000;
let porcentajeDescuento=20;

let cantidadDescuento= (precioReal*porcentajeDescuento)/100;
let precioConDescuento= precioReal-cantidadDescuento;

console.log(" Precio Real:$"+ precioReal);
console.log( "Porcentaje de descuento:" + porcentajeDescuento + "%");
console.log("Cantidad de descuento:$" + cantidadDescuento); 
console.log ("Precio con descuento:$"+precioConDescuento);

/*Operadores de asignación  
(=): Este operador no compara, lo que hace es asignar */
//let frutas =manzana; 

/*Operadores de comparación
(==): Igualdad, compara si nuestros valores son iguales
(===): Igualdad estricta Compara si tienen el mismo valor y además si son el mismo tipo de dato (true o false) 
(!=): Desigualdad o distinto, verifica si dos valores no son iguales y de ser necesario realiza la conversión 
(!===) Desigualdad estricta este operador verifica si dos valores no son iguales, pero a diferencia de (!=) en este caso ambos valores deben tener el mismo tipo y valor. 

*/

let numero3=10;
let texto="10";

console.log(numero3==texto);

//(===)

let numero4=10;
let texto1="10";

console.log(numero4===texto1);

//(!=): Desigualdad o distinto 

let precioCaja= 1499;
let precioMaximo= 1500;



if (precioCaja!=precioMaximo){

console.log("El precio del producto no es igual al precio máximo"); 


} else {
    console.log("El precio del producto es igual al precio maximo permitido"); 
}
let numero5=10;
let numero6="10";

if (numero5 !== Number(numero6)){
    console.log("Son diferentes")
} else{
    console.log ("Los valores son iguales");

} 

//(!===) Desigualdad estricta
let numero7 =41;
let numero8= "50";

if (numero7 !== numero8){
    console.log("Los valores son diferentes");
} else {
    console.log ("Los valores son iguales");
}
// (>) Mayor que básicamente nos indica si un valor es mayor que otro. 

let puntuacionfinal=85;
let puntuacionRequerida=102;

console.log(puntuacionfinal > puntuacionRequerida);

// (<) Menor que nos indica si un valor es menor que otro. 

let anios=20;
let edadLimite= 30; 

console.log(anios<edadLimite);

// (>=) Mayor o igual que y nos dice si un valor es mayor o igual a otro. 

let edad=40;
let edadNecesaria= 18;

console.log(edad >= edadNecesaria);

// (<= ) Menor o igual que y nos indica si un valor es menor o igual a otro. 

let temperatura=14;
let temperaturaMaxima=21;

console.log(temperatura<=temperaturaMaxima);

/*ejercicio 1 un programas que solicite al usuario dos números y en consola nos va a decir si esos números son iguales o hay alguno que sea mayor que otro*/

let primernumero= prompt ("Ingresa el primer numero");
let segundonumero= prompt ("Ingresa el segundo numero");

 if (primernumero===segundonumero){
    console.log("Los numeros son iguales");
} else if (primernumero > segundonumero){
console.log ("El primer numero es mayor que el segundo");}

else {
    console.log("El segundo número es mayor que el primero");
}
    


/*ejercicio 2 un programa que pida al usuarios dos palabras y determine si son iguales o no
*/

let palabra1=prompt("Ingresa una palabra");
let palabra2=prompt("Ingresa otra palabra");

if (palabra1===palabra2){
    console.log("Las palabras son iguales");
}else {
    console.log("Las palabras son diferentes");
}

/* OPERADORES LÓGICOS
 (&&) AND Se utiliza cuando las 2 condiciones deben cumplirse
 (||) OR  Se utiliza cuando una o las dos condiciones se deben cumplir. Basta con que se cumpla una. 
 (!) NOT Se utiliza para negar el valor de una condición

*/

//Ejemplo de (&&)

let mayoriaDeEdad= 18;
let tieneIdentificacion= true;

if (mayoriaDeEdad >=18 && tieneIdentificacion){
    console.log("Puedes rentar el salón");
} else {
    console.log("No puedes rentarlo");
}

//Ejemplo de (||)

let esPrime=false;
let descuento= true;

if (esPrime || descuento){
    console.log("Califica para descuento");
} else {
    console.log ("No califica para descuento");
}

//Ejemplo de (!)

let esDiaLibre=false;

if (!esDiaLibre){
    console.log("Se trabaja");
} else {
    console.log("Descansito");
}

/* Operadores de cadena 
toLowerCase hace el cambio de nuestro string a minusculas.
toUpperCase hace el cambio de nuestro srting a mayusculas. 
trim quita los espacios
toString convierte un tipo de dato  number en string 
concat junta los datos 

*/

//Ejemplo toLowerCase
let mensajeUsuario= "Bienvenido a la tierra";
let cambioMinusculas= mensajeUsuario.toLowerCase();

console.log(cambioMinusculas);

//Ejemplo toUpperCase

let saludo= "Casi Viernes, casi Navidad";
let cambioMayusculas= saludo.toUpperCase();

console.log (cambioMayusculas);

// Ejemplo trim

let aviso = "                        ch35  rifa"
let sinEspacios= aviso.trim();

console.log(sinEspacios);

// ejemplo toString

let numero10=31;
let cadenas = numero10.toString();

console.log(cadenas);

//Ejemplo de concat

let nombre= "Diana";
let apellido ="Alvarez";
let nombreCompleto= nombre.concat(" ", apellido);

console.log(nombreCompleto);

/*EXPRESIONES 

Expresión aritmetica 
let operacion= 14 +25 * 12; Combina la suma con la multiplicacion

Expresión de cadena
let notificacion = "Casi," + "Anio nuevo"; expresión concatenando

Expresión lógica

let esMayorDeEdad= (23 > 18)  && (23 <65); tiene operadores lógicos y de comparación 

Expresión de asignación

let frasco = chocolates; asigna el valor chocolates  a la variable 



*/

/*HOT CAKES*/

/*let tieneHarina = true;
let tieneHuevos = true;
let tieneMantequilla = false;
let tieneNutella = true;
let tieneLeche = true;

if (tieneHarina && tieneHuevos && tieneMantequilla && tieneNutella && tieneLeche) {
  console.log("¡Puedes hacer Hotcakes!");
  // Puedes agregar más condiciones o lógica aquí según sea necesario
} else {
  console.log("No puedes hacer Hotcakes. Necesitas todos los ingredientes.");
}*/

let tieneHarina = true;
let tieneHuevos = true;
let tieneMantequilla = true;
let tieneNutella = true;
let tieneLeche = true;


if (tieneHarina && tieneHuevos && tieneMantequilla && tieneNutella && tieneLeche) {
  alert("¡Puedes hacer Hotcakes!");
  // Puedes agregar más condiciones o lógica aquí según sea necesario
} else {
  alert("No puedes hacer Hotcakes. Necesitas todos los ingredientes.");
}


let siHay = false;
if (siHay == true) {
    alert("¡Genial! Tienes todos los ingredientes para hacer hotcakes.");
    alert("Comienza mezclando la harina, los huevos y la leche, luego añade la mantequilla derretida.");
    alert("Calienta un sartén y vierte un poco de la mezcla para hacer los hotcakes.");
    alert("Hotcakes listos, ¡a disfrutar!");
  } else {
        alert("Tssss, t faltan ingredientes para hacer hotcakes.");
        alert("No es posible hacer hotcakes sin todos los ingredientes.");
        alert("Ve a conseguirlos, CORREEEE");
  }