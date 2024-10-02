//METODOS DE STRINGS


let mensaje = 'hola a todos, mi nombre es Alejandro'


//Esta incluida la palabra 'nombre' dentro del mensaje

//INCLUDES
//string.includes(stringbuscado) me devuelve un booleano que indica si el stringbuscado esta incluido dentro del string, puede verificar multiples strings usando espacio ej('hola a todos')
//console.log(mensaje.includes('nombre'))


//MAYUSCULA O MINUSCULA
//toUpperCase o toLowerCase devuelve un string
let categoria = 'Tecnologia'

//queremos transformar a categoria a minuscula o mayuscula

/* console.log(categoria.toLowerCase())
console.log(categoria.toUpperCase()) */


/* let mensajeBuscado = 'Hola'

console.log(mensaje.toLowerCase().includes(mensajeBuscado.toLowerCase())) */


//URL FRIENDLY     REPLACE
let titulo = 'Tv Samsung 32 pulgadas'

//string.replace(valorBuscado, valorNuevo) busca un string y lo reemplaza DEVUELVE STRING
//solo lo hace una vez
//quiero que mi titulo sea url-friendly, osea que los espacios ' ' se transformen a '-'

/* titulo.replace(' ', '-')
console.log(titulo.replace(' ', '-')) */

//REPLACEALL

//reemplaza todos los strings 
//console.log(titulo.replaceAll(' ', '-'))


//PARA TRANSFORMAR UN STRING EN UN ARRAY

//SPLIT
//string.split() nos transforma un string en un array
//ejemplo codigo = [11, 2, PROD, '12/03/24']

let codigo = '11-2-PROD-12/03/24'

//console.log(codigo.split('-'))
let codigoPartido = codigo.split('-')

//si pongo .split('') separa cada caracter como valor de array

const datosElemento = {
    codigo: codigoPartido[0],
    area: codigoPartido[1],
    tipo: codigoPartido[2],
    fecha_creacion: codigoPartido[3]
}

//console.log(datosElemento)
/* 
codigo del elemento-codigo area-tipo elemento-fecha_creacion
fecha_creacion = dia/mes/año
*/


//cuando quiero que funcione para varios codigos realizo una funcion
let codigo1 = '11-2-PROD-12/03/24'
let codigo2 = '12-2-SERV-12/03/24'
let codigo3 = '30-2-TRANS-12/03/24'

function transformarCodigo (codigo){
    let codigoPartido = codigo.split('-')

    const datosElemento = {
        codigo: codigoPartido[0],
        area: codigoPartido[1],
        tipo: codigoPartido[2],
        fecha_creacion: codigoPartido[3]
    }
    return datosElemento
}

/* console.log(transformarCodigo(codigo1))
console.log(transformarCodigo(codigo2))
console.log(transformarCodigo(codigo3)) */


//JOIN es un metodo de array
//nos permite transformar un array en un string array.join(), en parentesis va el valor por el cual quiero unificarlo, pueden ser guiones, espacios, strings, etc; si queda vacio se separan por coma por defecto

let codigo_partido = ['11', '2', 'PROD', '12/03/24']

//console.log(codigo_partido.join('-'))


//LENGTH
//para saber cuantos caracteres tiene
let string = 'pepe'
//quiero saber cuantos caracteres tiene un string
//console.log('mi string tiene ' + string.length)


//para saber que caracter esta en un x lugar se usa como array []
console.log(string[0])

//para repetir mi string se usa REPEAT
console.log(string.repeat(3))

let rating = 5
console.log('⭐'.repeat(rating))