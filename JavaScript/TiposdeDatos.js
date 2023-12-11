/*Tipos de datos 
>-String (cadenas de texto)
>-Number(numericos)
>-Booleans(booleanos: true or false)
>Null (nulos)
>-Undefined(Indefinidios)
>- Objects (objetos )
>-Objects (Arrays)


*/

/*console.log(); Nos permite visualizar en consola del navegador el código de JS.
console.warn(); Muestra un mensaje dde advertencia. 
console.error(); Muestra un mensaje de error. 
console.table();

*/
let firstName; 
firstName =  "Diana";
let lastName= "Alvarez";

console.log(firstName + "" + lastName);
console.log("Mi nombre es "+ firstName + "y mi apellido es " + lastName);

/*ECMAScript 6 (ES6). Interpolación de cadenas
> -backticks ´´
> -Para variables ${}
>texto para string */

let age= 27; 
console.log (`Mi nombre es ${firstName},  
mi apellido es ${lastName} 
y tengo ${age} años` );

//console.warn();
console.warn(`Precaución, no es buena práctica dejar sin punto y coma`);

//console.error
console.error(`Status 404:Failed`);

/* Array
Se traduce como matriz o arreglo. Es un tipo de dato que pertenece a JS, en el cual se almacena una colección de elementos de manera ordenada. 
- Los arrays se pueden manipular mediante métodos específicos. 
- Los elementos de un array se contabilizan como índices, empezando por índice 0 por lo cual, el primer elemento del array posee el índice 0. 
- Un arrat posee n cantidad de elementos.
- Se declaran como variables, seguido del signo igual y corchetes. Dentro de cada corchete vive un elemento con un tipo de dato. 

*/

let arreglo01=[]; //Array vació
console.log(`Array vacío ${arreglo01}`);
//Los elementos de un array se separan mediante comas 
let cars=["Volkswagen","BMW","Mazda","Kia"]; //Array de String
console.log(cars);
//longitud e índice son diferentees. La Longitud(length) es el número de elemetos y el índice corresponde a cada elemento a partir del 0


console.log(typeof(cars));//Output:object

//Array de Numbers 
let salariesMxn= [15000, 12000, 18000, 25000,10000,18500,18200,20500, 17000,17200, 30000, 50000];
console.log(salariesMxn.length); //Output:12
console.log(salariesMxn);

/*
Objetos. Los objetos son tipos de datos en JS, con una estructura definidia que nos permite almacenar información mediante llaves (claves) y valores. 
const object{
    clave1: valor1 (dato1),
    clave2: valor 2 (dato2)
}
Los objetos pueden almacenar diferentes tipos de valores. 
*/
const employee = {
    firstName:"Diana Laura",
    lastName: "Alvarez",
    age: 29,
    country: "Mexico"
} 

console.log(employee);

//Mostrando mi array como table
console.table(cars);

//Mostrando mi objeto como tabla
console.table(employee);