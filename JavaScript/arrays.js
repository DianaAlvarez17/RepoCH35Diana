/* 
*==Arrays==
Es una colección o agrupación de elementos en una misma variable, cada uno de ellos ubicado por la posición que ocupa el array.
*Los arrays se utilizan para almacenar y organizar datos de manera más eficiente. 

*/
//*Crear una Array 
const numeros =[1,2,3,4,5];
//*Arrat de cadena de texto
const comida =["tacos", "sopita","pan", "jugo"];
console.log(comida); 

// Array mixto
const mixto = [
    "pluma", 
    8,
    true,
    { nombre: "Diana"}

];
console.log(mixto);

//*Array vacío
const lista=[];
console.log(lista);
//*Agregar  elementos a mi array vacio
lista[0]= "Leche";
lista[1]= "Carne de pollo";
lista[2]= "espinacas";
lista[3]= "Huevos";
console.log(lista);
//*Otra manera de crear un Array
const frutas= new Array ("Manzana", "Pera", "Naranajas", "uvas", "mandarinas");

/*Esta sittaxis se puede emplear en Arrays porque son objects, es una manera de mandar a llamar a un nuevo objeto de tipo Array.*/
console.log(frutas);

//longitud de un array
console.log (frutas.length);
//Accedet a los elementos del Array, acorde a su índice
console.log(frutas [3]);// uvas
console.log(frutas[5]);// undefined

// Modificar un elemento del array por el índice
const cremeria = ["queso panela","jamón", "salchicha","queso canasto", "queso cotija", "yogurth"];

console.log(cremeria);
//cambié salchicha por pepperoni
cremeria[2]= "pepperoni";
cremeria[5]="Danonino grandote";
console.log(cremeria);

//* Arreglo de arreglos o multitudimensional
console.log("Arreglo de arreglos");

//* Estados: EDOMEX, Jalisco, Yucatán, Sonora ,Oaxaca, CDMX.

//*Platillos: Guajolocombo, torta ahogada, panuchos, dogos, tlayuda, tacos. 
const estados=[ "EDOMEX", "Jalisco", "Yucatán", "Sonora", "Oaxaca", "CDMX"];
const Platillos= [ "Guajolocombo", "torta ahogada", "panuchos", "dogos", "tlayuda", "tacos"];

const menu= [estados,Platillos];

console.log(`En ${menu[0][1]} también se come ${menu[1][2]}`);
/* En el primer corchete se establece el índice del array y en el segundo corchete se establece el índice del elemento de dicho array. */
console.log(menu[0][0],menu[1][0]);

/* 
Métodos de Arrays 
Método de cola (queue). Los métodos de cola implican agregar elementos al final del array y eliminar elementos al inicio del array. Sigue el principio de FIFO (First-in-first-out) Lo que signigica el primer elemento añadido es el primer elemento eliminado.  
*push
*shift 
*unshift



Método de pila (stack).Implica agregar elementos al final del array y eliminar elementos del final del array. Sigue el principio LIFO (Last-in-first-out) que significa el último elemento añadido es el primero en ser eleminidad.el último elemento (L) que se agrega(I) es el primero(F) en ser eliminado(O), ese es LIFO

*push 
pop
*/
console.log("metodos de arrays");
const ch35 =["Dani", "Fer", "Mara", "Gaby", "Mariana", "Paola", "Enrique"];
console.log(ch35); 
//*pop() Eliminat el último elemento del array 
let popch35= ch35.pop();
console.log(popch35);//devuelve el dato eliminado
console.log(ch35);//elimina el dato de la lista

//*push () Agregar al final del array 
let pushch35=ch35.push("Mony");
console.log(ch35);

//*shift () quitar primero del array 
let shiftch35= ch35.shift();
console.log(ch35);

//* unshift agregar al principio del array 
let unshiftch35=ch35.unshift ("Dani");
console.log(ch35);

//* reverse () cambia el sentido del ordenamiento del array
let reversech35=ch35.reverse();
console.log(ch35);
/* Investigar:
sort
forEach
slice
splice
indexOf

*/

/*
*Ejercicios
*Ejercicio de Arrays:
Descripción:
Supongamos que tienes una lista de temperaturas diarias en grados Celsius para una semana. Tienes que convertir estas temperaturas a grados Fahrenheit y mostrar los resultados.
* Temperaturas diarias en grados Celsius para una semana
const temperaturasCelsius = [22, 25, 19, 30, 27, 21, 18];
*Instrucciones:

Crea una función llamada celsiusToFahrenheit que tome una temperatura en grados Celsius y la convierta a grados Fahrenheit usando la fórmula: F = C * (9/5) + 32.
Utiliza un bucle para recorrer el array temperaturasCelsius, llama a la función celsiusToFahrenheit para cada temperatura y almacena los resultados en un nuevo array llamado temperaturasFahrenheit.
Muestra ambos arrays (temperaturasCelsius y temperaturasFahrenheit) en la consola.
*/

const TemperaturasC=["22", "25", "19", "30", "27", "21", "18"]; 
    function CelsiusToFahrenheit(C) {
        return C *(9/5) +32
       
}
console.log (CelsiusToFahrenheit(22));






/*
*Ejercicios de Bucles:
*Descripción:
Escribe un programa que sume los primeros 10 números naturales (1 al 10) e imprima el resultado.

*Instrucciones:

Utiliza un bucle (for o while) para sumar los números del 1 al 10.
Imprime el resultado de la suma en la consola.
Sugerencia:
Puedes usar una variable llamada suma para acumular la suma mientras recorres los números.
*/

let suma = 0; 
for(let i= 1; i<=10; i++){
    suma+=i; 
}
console.log(suma);


/*
*Ejercicio : Números Primos
Escribe un programa que determine si un número ingresado por el usuario es primo o no. Un número primo es aquel que solo es divisible por 1 y por sí mismo. Puedes utilizar un bucle for para verificar si el número tiene algún divisor además de 1 y él mismo.*/
 

function esPrimo(numero) {
  if (numero ===2){
    return console.log(true);
  } else if (numero <2){
    return console.log(false);
  } else for (let i=2; i <numero; i++)
  {
    if (numero%i===0){
      return console.log (false)
    }
  } 
  return console.log(true);


}
esPrimo(3);
  
  
  
/*Ejercicio : Secuencia de Fibonacci
Escribe un programa que genere los primeros 10 términos de la secuencia de Fibonacci. La secuencia de Fibonacci comienza con 0 y 1, y cada término subsiguiente es la suma de los dos anteriores (0, 1, 1, 2, 3, 5, 8, 13, 21, ...).

Estos ejercicios implican un poco más de lógica y son ideales para practicar conceptos más avanzados. ¡Espero que disfrutes resolviéndolos!*/

const fibonacci = (numeros) => {
    let secuencia = [0, 1];

    for (let i = 2; i < numeros; i++) {
        secuencia[i] = secuencia[i - 1] + secuencia[i - 2];
    }

    return secuencia;
};

const numerosFibo = fibonacci(10);
console.log('Los primeros 10 numeros de la secuencia de Fibonacci son:', numerosFibo);


