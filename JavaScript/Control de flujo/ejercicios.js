// Ejercicios para esta sesion

/** Ejercicio 1
 * 
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * 
 * Debe recibir como parametro la edad
 * 
 * Consideraciones: utilizar la estructura if-else
 */

let edad =20;
if(edad > 18){
    console.log("Puedes votar");

} else {
    console.log("Ni INE tienes");
}


/** Ejercicio 2
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * 
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */

let n=224;
if (n%7==0 && n%8==0){
    console.log(true);
} else{
    console.log(false);
}
/** Ejercicio 3
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura if-else
 */

let numero=22;
if (numero%4==0 || numero%9==0){
    console.log(true);
} else{
    console.log(false);
}

/** Ejercicio 4
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch
 */
let pelicula= "romance";
switch (pelicula){
    case "accion" :
        console.log("Rapido y Furioso");
        break;
    case "drama":
        console.log("Eterno resplandor de una mente sin recuerdos");
        break;
    case "comedia":
        console.log("Nacho Libre");
    case "romance":
        console.log("Orgullo y Prejuicio");
        break;
    case "suspenso":
        console.log("Saw");
        break;
    case "terror":
        console.log("La Medium");
        break;
        default :
        console.log ("Ni idea que recomendarte");
        break;
}

/** Ejercicio 5
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 * Utilizar if/else
 */
function cajeroATM(operacion){
    operacion=
    parseInt(prompt("Elige una operacion:"));
    if (operacion==1){
        return"Retirar dinero";
    }else if (operacion==2){
        return "Transferencia";
    }else if (operacion==3){
        return "Deposito";
    }else if(operacion==4){
        return"Pago de servicios";
    } else {
        return "Operacion incorrecta";
    }
}
console.log(cajeroATM());
    





/** Ejercicio 6
 * 
 * Escribir en codigo un programa conversor de divisas
 * 
 * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 * 
 * 1. A dolares estadounidenses
 * 2. A euros 
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 * 
 * Consideracion: estructura switch
 * 
 */



const convertirDivisas= (cantidad, opción) => {
    switch (opción){
        case 1: 
        console.log(`${cantidad} pesos en dolares serían: `)
            return cantidad/20;
            break;
        case 2:
            console.log(`${cantidad} pesos en euros serían: `)
            return cantidad/18;
            break;
        case 3:
            console.log(`${cantidad} pesos en yenes japoneses:  `)
            return cantidad/0.12;
            break;
        case 4:
            console.log(`${cantidad} pesos en libra esterlina:` )
            return cantidad/25;
            break;
        case 5:
            return cantidad/19;
            break;
         default :
            console.log ("divisa no encontrada");
            break;
    
    
    }
        
} 
console.log(convertirDivisas(20, 2));







