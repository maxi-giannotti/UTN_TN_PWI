//PRACTICA DE METODOS DE STRING


/* 1.
Solicitar al usuario un texto y verificar si se trata de una URL con certificado ssl,
Si cuenta con con https:// decir por consola "la url ingresada, cuenta con certificado ssl"
Si no lo tiene pero si tiene http:// "la url ingresada no cuenta con certificado ssl"
Si no posee ninguno decir "no has ingresado una url valida" */

/* function verificarUrl() {
    let solicitudUrl = prompt('Ingrese el texto a verificar').toLowerCase()
        if (solicitudUrl.includes('https://')) {
            alert('La url ingresada, cuenta con certificado ssl')
        }
        else if (solicitudUrl.includes('http://')) {
            alert('La url ingresada no cuenta con certificado ssl')
        }
        else {
            alert('No has ingresado una url valida')
        }
    }
    verificarUrl() */


/* 2.
Dado los siguientes texto
"hola%20como%20estas,%20todo%bien?"
"no%20me%20siento%20bien"
"que%20mal"
descifrar el codigo y mostrarlo por consola: "El codigo descifrado es: " + codigoDescifrado
Averiguar la cantidad de caracteres y en base a el numero de caracteres mostrar
"el mensaje es corto" entre 1 y 8 caracteres
"el mensaje es mediano" entre 9 y 18
"el mensaje es largo"  mas de 18
Ademas si el mensaje cuenta con ",", "@", "-" debera decir, "el mensaje es complejo", sino decir
"el mensaje no es complejo" */
/* 
let codigo = 'no%20me%20siento%20bien'
let codigoCifrado = codigo.replaceAll('20', '').replaceAll('%', ' ')

function codigoLongitud (codigoCifrado) {
    if(codigoCifrado.length <= 8){
    return('el mensaje es corto')
}
    else if(codigoCifrado.length > 8 && codigoCifrado.length <= 18) {
    return('el mensaje es mediano')
}
    else{
    return('el mensaje es largo')
}
}
function codigoComplejidad (codigo){
    if(codigo.includes(',') || codigo.includes('@') || codigo.includes('-' )){
    return('El mensaje es complejo')
}
    else
{
    return('El mensaje no es complejo') 
}
}
console.log(`El mensaje cifrado es: "${codigoCifrado}"` )
console.log(codigoLongitud(codigoCifrado))
console.log(codigoComplejidad(codigo))
 */
/* 3.
solicitar al usuario un mensaje, y cifrarlo con %20 en los espacios. Una vez cifrado decifrarlo
con el algoritmo anterior. */

/* let mensajeUsuario = prompt('Por favor ingrese un mensaje')
let mensajeCifrado = mensajeUsuario.replaceAll(' ', '%20')

console.log(mensajeCifrado)
console.log(mensajeCifrado.replaceAll('20', ' ').replaceAll('%', ' ')) */

/* 4.
Solicitar al usuario una palabra y decir en consola "tiene mayuscula" en el caso de que tenga
una maysucula, sino decir "tiene minuscula" */

/* let palabraUsuario = prompt('Por favor ingrese una palabra')
if(palabraUsuario !== palabraUsuario.toLowerCase()){
    alert('tiene mayuscula')
}
else{
    alert('tiene minuscula')
} */

/* 5.
Dado una cadena de texto, imprimir "La cadena es mayor a 10 caracteres" si la longitud de la cadena es mayor a 10, de lo contrario imprimir "La cadena es menor o igual a 10 caracteres". */

/* let cadenaDeTexto = prompt ('Ingrese una oración')

if(cadenaDeTexto.length >= 10){
    alert('la cadena es mayor a 10 caracteres')
}
else{
    alert('la cadena es menor o igual a 10 caracteres')
} */

/* 6.
Dada una cadena de texto, imprimir "La cadena contiene la letra 'a'" si la cadena contiene la letra 'a', de lo contrario imprimir "La cadena no contiene la letra 'a'". */

/* let cadenaDeTexto = prompt('Ingrese una oracion')

if(cadenaDeTexto.toLowerCase().includes('a')){
    alert('La cadena contiene la letra "a"')
}
else{
    alert('La cadena no contiene la letra "a"')
} */

/* 7.
Dada una cadena de texto, reemplazar todas las apariciones de la letra 'a' con la letra 'x' y imprimir la nueva cadena. */

/* let cadenaDeTexto = prompt('Ingrese una oracion')

alert(cadenaDeTexto.toLowerCase().replaceAll('a','x')) */

/* 8.
Dada una cadena de texto, imprimir "La cadena es un número" si la cadena es un número válido, de lo contrario imprimir "La cadena no es un número". */

let cadenaDeTexto = prompt('Ingrese una oracion')
if(!isNaN(cadenaDeTexto)){
    alert('la oracion es un numero')
}else{
    alert('la oracion no es un numero')
}