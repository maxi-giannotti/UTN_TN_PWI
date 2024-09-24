//FUNCIONES y

//FOR (bucle for)

//bucle es una esctructura que nos permite repetir acciones/bloques de codigo,por ejemplo:
/* 
while(!estoyCansado){
    console.log('bailar')
    }
 */

//CASO DE BUCLE FOR
//ej, quiero que por cada usuario, la app le envie un mail de terminos y condiciones actualizado.
//cuando queremos usar FOR, cuando queremos repetir una accion una X cantidad de veces
//es el que mas se va a usar en la practica diaria

//Por cada usuario de mi app, voy a decir en consola 'usuario suscripto'

/* let cantidad_de_usuarios = 3  */

//CONDICION
/* for(
    let iterador = 1; 
    iterador <= cantidad_de_usuarios; 
    iterador = iterador + 1){
//ACCION
    console.log('usuario suscripto')
}
 */
//Iterador: cantidad de veces que se esta ejecutando una accion
//Condicion/limite :  mientras la condicion sea verdadera, el bucle se repetira. SI O SI CON PUNTO Y COMA
//Actualizacion : a que ritmo se va a actualizar nuestro contador/iterador

//resultado

/* otro ejemplo
quiero que mw diga por alerta hola 3 veces */

/* for(let iterador = 1; iterador <= 3; iterador = iterador + 1){
    alert('hola')
} */

//otro ej: solicitar al usuario 3 numeros y calcular la sumatoria de los 3 numeros

/* let sumatoria = 0
for(
    let iterador = 1; 
    iterador <= 3;
    iterador = iterador + 1
){
    let numero = prompt('Ingrese un numero')
    while(!numero || isNaN(numero)){
        numero = prompt('Error, dato no valido, ingresa nuevamente')
    }
    numero = Number(numero)
    sumatoria = sumatoria + numero
}
alert('La sumatoria de tus numeros es: ' + sumatoria) */

/* 
1)Imprime los números del 1 al 10
2)Imprime los números pares del 2 al 20
3)Imprime los números impares del 1 al 19
4)Imprime los números del 10 al 1 en orden inverso
5)Imprime los números del 1 al 10, pero se detiene al llegar al 5 BREAK
6)Imprime los números del 1 al 10, pero salta el 5 CONTINUE 
*/

//BREAK corta el bucle
//CONTINUE pasa a la siguiente operacion

//RESOLUCION:

/* EJERCICIO 1*/
/* for(let iterador = 1; iterador <= 10; iterador = iterador + 1){
    console.log(iterador)
} */

/* EJERCICIO 2*/
/* for(let iterador = 2; iterador <= 20; iterador = iterador + 2){
    console.log(iterador)
} */

/* EJERCICIO 3*/
/* for(let iterador = 1; iterador <= 19; iterador = iterador + 2){
    console.log(iterador)
} */

/* EJERCICIO 4*/
/* for(let iterador = 10; iterador >= 1; iterador = iterador - 1){
    console.log(iterador)
} */

/* EJERCICIO 5*/
/* for (let iterador = 1; iterador <= 10; iterador = iterador +1){
    if(iterador == 5){
        break
    }
    console.log(iterador)
} */

/* EJERCICIO 6*/
/* for(let iterador = 1; iterador <= 10; iterador = iterador +1){
    if(iterador == 5){
        continue
    }
    console.log(iterador)
} */