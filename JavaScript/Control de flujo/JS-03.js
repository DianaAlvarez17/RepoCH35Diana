console.log("Hola CH35")
/* 
CONTROL DE FLUJO  Y ESTRUCTURAS DE CONTROL 

Las estructuras de control son un componente fundamental dentro de la programación, entre algunas de las facilidades y ventajas que nos proporcionan para escrubir y depurar código, podemos mencionar las siguientes: 
- Tomar decisiones basadas en condiciones especificas, esto produce un codigo
 * tanto dinamico como adaptable
 * 
 * - Repetir acciones (estructuras de bucle) para iterar operaciones o procesar datos
 * de una forma eficiente sin caer en la redaccion de codigo innecesario y repetitivo
 * 
 * - Facilitar el control de flujo de una operacion, brindandonos la oportunidad de ser
 * especificos en indicar qe instrucciones ejecutar y en que orden
 * 
 * - Optimizan el rendimiento de nuestro codigo, ya que evita oportunamente ejecutar instrucciones
 * en caso de que no se necesite
 * 
 * - Facilitar tanto la escritura de codigo como la claridad de este
 * 
 * Las estructuras de control que vamos a ver durante las sesiones de JS son las siguientes
 * 
 *      - Estructura if-else
 *      - Estructura switch
 *      - Estructuras de bucles (for, do, do while)
 * 
 * Para esta sesion, nos centraremos solo en las primeras 2 señaladas en la lista

*/

/* 
*Declaración de sentencia if-else
Palabra reservada if para comenzar la declaración, se coloca un parentesis () donde se debe colocar una expresión lógica (true/false), se abren y cierran llaves {} para indicar qué sentencia va a ejecutar si la condición se cumple(true), 
*después de la llave {} declarada para el bloque de ejecución if, colocamos la palabra reservada  else, para este ejemplo no es necesario colocar más expresiones dentro de un () simplemente colocamos otras llaves {} para indicar el bloque de código que tiene que ser ejecuado en caso de que la condición no se cumpla (false).

*/
let n =15;
if(n > 20){
    console.log(true);

} else{
    console.log(false);
}
/*
if-else-if
 * 
 * Se trata de la misma sentencia if-else declarada anteriormente
 * Lo que vamos a hacer diferente es, en este caso, anidar varias veces
 * esta misma sentencia, lo que nos permitira tomar decisiones
 * mas complejas
 * 
 * Usaremos la contatenación.
 * Concatenar es una elegante palabra de la programación que significa: "unir". Para unir cadenas en JavaScript el símbolo de más (+), el mismo operador que usamos para sumar números, pero en este contexto hace algo diferente.
 * 
 * Hay que tener cuidado y no realizar demasiadas anidaciones, ya que va a resultar
 * en codigo poco legible y confuso
*/
//If anidados 
let edad= 27
if (edad < 18){
    console.log("Eres menor de edad, retirate");
} else if (edad >= 18 && edad <65) {
    console.log("Eres un adulto joven, pero sin dinero xd");
} else {
    console.log ("Eres un adulto mayor, perdón pero la tierra te reclama");
}

/*
SENTENCIA SWITCH
La sentencia switch es otro tipo de estructura de control de flujo, que, nuevamente se encuentra en diversos lenguajes de programación.
Es bastante parecida a la sentencia de if-else, pero va a ser diferente en cuanto a comportamiento, ya que no se basa en una bifurcación(particion de caminos), sino que se secciona  en múltples casos (case) que dependiendo de la expresión que cumpla con un caso específico, será la secuencia que se va a ejecutar, dentro de la declaración. 

Declaración :
se empieza por colocar la palabra reservada switch, seguido de esto, colocamos parentesis () donde se debe colocar el valor que va a indicar qué sentencia/caso a ejecutar. 

Falta indicar el bloque de código que se limita a esta sentencia, como lo hacíamos en la sentencia if  o con las funciones. 
Dentro de este bloque de código, falta colocar los casos para cada valor que se desee, establecer segun sea el valor indicado dentro del parentesis().
Cada uno de estos casos se separa de la siguiente  manera: 
*case valor:instrucción a ejecutar si el valor empata con este caso. 
Después, para indicar que la ejecución de las sentencias debe cortarse cuando se cumpla, se coloca la instrucción
*break
*Cuando terminemos de establecer los casos que necesitemos declarar, dentro de nuestra sentencia, debemos colocar un valor por defecto, default. 
Esta última sentencia nos permite establecer un valor por defecto, si es que este valor colocado no empata con ningun otro dentro de la sentencia o en niguno de los casos. 
default: mensaje no disponible. 
*/

let dia= "domingo";
switch (dia){
    case "lunes" :
        console.log("Odio los lunes att:Garfield");
        break;
    case "martes":
        console.log("Aún falta para el viernes");
        break;
    case "miércoles":
        console.log("Toca presentar proyecto");
    case "jueves":
        console.log("Ya casi es viernes");
        break;
    case "viernes":
        console.log("el lunes sin falta, carnal");
        break;
    case "sabado":
        console.log("sabadrink y taquitos");
        break;
    case "domingo":
        console.log("Vamos a la barbacoa");
        break; 
        default :
        console.log ("Día desconocido");
        break;


    
}// termina switch

/* OPERADOR TERNARIO
Expresión condicional if else más simple y legible
Principalmente se usa para simplificar condiciones de una sola expresión. 
También puede anidar sentencias if-else-if, sin embargo, no es recomendado porque el código se puede volver confuso y poco legible . 
Su declaración es la siguiente:
*Palabra reservada var, let o const:
se le asigna un nombre como si se tratara de una variable, operador de asignación "=", seguido de este operador hay que colocar una expresión lógica, esta va dentro de un parentesis (), después hay que colocar un caracter "?" que indica el camino a seguir, dependiendo de si, se cumple (o no) la expresión.
Para separar el resultado true de false debemos agregar un caracter de: del lado izquierdo se coloca la sentencia a ejecutar. 
Si se cumple la condición, del lado derecho se coloca la sentencia a ejecutar 
*/

// Ejemplo de Operador Ternario
let verificación = n > 5 ? "si es mayor": "No es mayor"
console.log (verificación);

/* 
Cuando usar if-else y cuando switch?
if- else: Cuando necesitemos tomar decisiones bajo condiciones más flexibles.
switch: cuando tengamos un conjunto fijo de valores para comparar una expresión 
*/