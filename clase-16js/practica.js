/* 7)Crea una función llamada decirNombre(nombre) y nos ejecute una alerta “Hola “ + nombre */

/* function decirNombre(nombre){
    alert(`Hola ${nombre}`)
}

decirNombre('maria') */

/* 8)Crea una función llamada saludar(nombre) y nos devuelva un  string  “Hola “ + nombre y luego invoca la función dentro de una alerta */

/* function saludar(nombre){
    return `Hola ${nombre}`
}

alert(saludar('maxi')) */

/* 9)Crea una función llamada sumar(a,b) y nos devuelva la suma de a y b */

/* function sumar(a,b){
    return Number(a) + Number(b)
}
let resultado = sumar(15,36)
console.log(resultado)  */

/* 10)Crea una función llamada restar(a,b) y nos devuelva la resta de a y b */

/* function restar(a, b){
    return Number(a) - Number(b)
}
let resultado = restar(49,35)
console.log(resultado)*/


/* 11)Crea una función llamada calcular(operación,a,b) y dependiendo de si la operación es “+” o “-” invocar la función sumar(a,b) o restar(a,b) (retornar el resultado), en caso de recibir una operación no válida devolver null  */

/* function calcular(operacion, a, b){
    if(operacion == '+'){
        return Number (a) + Number(b)
    }
    else if(operacion == '-'){
        return Number (a) - Number (b)
    }
    else{
        return null
    }
}
let sumar = calcular('+',52,17)
let restar = calcular('-',86,67)

console.log(sumar)
console.log(restar)
console.log(calcular('hola',55,28)) */

/* 12)Crea una función llamada contarHasta(número) y nos cuente hasta ese número por consola */

/* function contarHasta(numero){
    for(let iterador = 1;
    iterador <= numero;
    iterador = iterador + 1
    )
    console.log(iterador)
}
contarHasta(29) */

/* 13)Pregúntale al usuario si desea usar la calculadora, mientras su respuesta sea “SI” ejecutaras el siguiente algoritmo. Solícita al usuario un número, otro número y una operación, luego con los valores ingresados ejecuta la función calcular para mostrar el resultado por alerta. Una vez hecho esto se volverá a preguntar al usuario si quiere volver a usar la calculadora. Si escribe algo distinto de sí, el programa nos dirá por alerta “El programa ha finalizado”. */

/* function sumar(a, b) {
    return a + b;
}
function restar(a, b) {
    return a - b;
}
function calcular(operacion, a, b) {
    if (operacion === "+") {
        return sumar(a, b);
    } else if (operacion === "-") {
        return restar(a, b);
    } else {
        return null;
    }
}
let opcion = prompt("Desea utilizar la calculadora?")
while(opcion === "si"){
    let operacion = prompt("Ingrese '+' para sumar o '-' para restar");
    let a = Number(prompt("Ingrese el primer número"));
    let b = Number(prompt("Ingrese el segundo número"));
    alert(calcular(operacion, a, b));
    opcion = prompt("Desea seguir calculando?, Ingrese si para seguir y no para terminar")
}
alert("El programa ha finalizado") */

/* 14 y 15) Hacer  un programa que imprima 25 términos de la serie 11 - 22 - 33 - 44–55-66…..no shacer  un programa que permita cargar 5 números enteros y luego nos informe cuántos valores fueron pares y cuántos impares.e ingresan valores por teclado.*/


/* for (let i = 1; i <= 25; i = i + 1) {
    console.log(i * 11);
}

let pares = 0;
let impares = 0;

for (let i = 0; i < 5; i++) {
    let numero = prompt(`Ingrese el número ${i + 1}:`);

    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

console.log(`Cantidad de números pares: ${pares}`);
console.log(`Cantidad de números impares: ${impares}`); */

/* 16) Hacer un programa donde se ingresan un conjunto de 5 alturas de personas por teclado. Mostrar la altura promedio de las personas. */ 

// Problema 16: Calcular la altura promedio de 5 personas
/* let sumaAlturas = 0;
let cantidad = 5;

for (let i = 0; i < cantidad; i++) {
    let altura = parseInt(prompt(`Ingrese la altura de la persona ${i + 1} (en metros):`));
    sumaAlturas += altura; // Sumamos la altura ingresada
}

// Calculamos la altura promedio
let alturaPromedio = sumaAlturas / cantidad;

// Mostramos el resultado
console.log(`La altura promedio de las personas es: ${alturaPromedio.toFixed(2)} metros.`); */

// Problema 16: Calcular la altura promedio de 5 personas
/* let sumaAlturas = 0;
let cantidad = 5;

for (let i = 0; i < cantidad; i++) {
    let altura;
    
    // Validar la entrada
        altura = parseFloat(prompt(`Ingrese la altura de la persona ${i + 1} (en metros):`));
        if (isNaN(altura) || altura <= 0) {
            alert("Por favor, ingrese un número válido mayor que 0.");
        }
    while (isNaN(altura) || altura <= 0);
    
    sumaAlturas += altura; // Sumamos la altura ingresada
}

ESTE ESTA MEJOR 

function promediarAlturas (cantidad_alturas_a_sumar){ 
    let sumatoria_alturas = 0
    for(let i = 1; i <= cantidad_alturas_a_sumar; i = i + 1){
        let altura = prompt(`ingrese altura de la ${i} persona`)
        sumatoria_alturas = sumatoria_alturas + Number(altura)
    }
    let promedio_alturas = sumatoria_alturas / cantidad_alturas_a_sumar
    return promedio_alturas
}
let resultado_promedio = promediarAlturas(3)
console.log('resultado', resultado_promedio)

// Calculamos la altura promedio
let alturaPromedio = sumaAlturas / cantidad;

// Mostramos el resultado
console.log(`La altura promedio de las personas es: ${alturaPromedio.toFixed(2)} metros.`); */

