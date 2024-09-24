//CONSIGNAS

/* 
1. Sumar dos números:
Pide al usuario dos números, y luego muestra la suma usando un alert.
2. Juego de adivinanza:
Crear una variable interna llamada, numero_secreto
Pide al usuario que adivine un número secreto entre 1 y 10. Si adivina correctamente, muestra un mensaje de éxito por alerta, sino, veremos si el numero seleccionado es mayor o menor al numero secreto, si es mayor diremos 'te pasaste' si es menor diremos 'un poquito mas..'
3. Verificar edad:
Pide al usuario su edad, si tiene 18 años o más, le dice que es mayor de edad, si no, le dice que es menor de edad.
 */

/* EJERCICIO 1, caso correcto con validaciones */

/* let num1 = prompt('Ingrese el primer numero')

while (!num1 || isNaN(true)) {
    num1 = prompt('ERROR dato no valido, ingrese nuevamente')
}
let num2 = prompt('Ingrese el segundo numero')

while (!num2 || isNaN(true)) {
    num2 = prompt('ERROR dato no valido, ingrese nuevamente')
}
num1 = Number(num1)
num2 = Number(num2)
let resultado = num1 + num2

alert(`La suma de ${num1} y ${num2} es ${resultado}`) */

/* EJERCICIO 2 */

/* let num_secret = 3

while (true) {
    let respuesta = prompt('Adivina el numero secreto del 1 al 10')

    if(isNaN(respuesta)){
        alert('ERROR, ingrese un dato numerico')
    }
    else if(Number(respuesta) < 1 || Number(respuesta) > 10){
        alert('ERROR, ingrese un numero entre 1 y 10')
    }
    else if(Number(respuesta) < num_secret){
        alert('Un poquito mas..')
    }
    else if(Number(respuesta)> num_secret){
        alert('Te pasaste...')
    }
    else if(Number(respuesta) === num_secret){
        alert('CORRECTO')
        break
    }
} */

/* EJERCICIO 3 */

let edad = prompt('Ingrese su edad')

if(edad === null){
    alert('Has cancelado el proceso')
}
else if(!edad || isNaN(edad) || Number(edad) <= 0){
    alert('ERROR dato no valido')
}
else if(Number(edad) >= 18){
    alert('Eres mayor de edad')
}
else if(Number(edad) < 18){
    alert('Eres menor de edad')
}