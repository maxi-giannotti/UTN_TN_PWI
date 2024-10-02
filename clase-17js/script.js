//ARRAYS metodos y metodos avanzados
//se podrian considerar listas de elementos/datos ORDENADA, para hacerlo se usa corchetes[], se pueden guardar numeros, strings, booleanos, objetos, otros arrays. por ej:

//                  0       1       2   
let alumnos = ['pepe', 'juan', 'matias']
//console.log(alumnos)
//para llamar a juan por ej se pone en corchetes:
//console.log(alumnos[2])

//al ser una lista ordenada, no es lo mismo estar en posicion 0 que en posicion 5, EMPIEZAN POR 0.
//SINONIMOS DE ARRAY: arreglos, listas, matrices, colecciones, collection, list

//para REASIGNAR el valor de alguno se hace:
//alumnos[0] = 'pepito'

//para ELIMINAR una propiedad:ES MALA PRACTICA✖️
//delete alumnos[1]

//crear valores en posiciones no existentes tambien es MALA PRACTICA, ej
//alumnos[5] = pedrito

//.length es una propiedad intrinseca de los arrays, significa longitud y nos dice cuanto es la cantidad de elementos en la lista, cuantas posiciones se utilizaron en la lista (tiene en cuenta los vacios en caso que los haya)
//console.log(alumnos.length)

let mails = [
    'pepe@gmail.com',
    'juan@gmail.com',
    'maria@gmail.com',
    'pedrito@gmail.com'
]

/* por cada mial de la lista quiero que por consola diga: mail enviado a (x direccion) */
/* console.log(`mail enviado a ${mails[0]}`)
console.log(`mail enviado a ${mails[1]}`)
console.log(`mail enviado a ${mails[2]}`) */
//es poco escalable, MALA PRACTICA

//mails.length : cantidad de veces que deberemos repetir el mensaje por consola
/* for(let posicion = 0; posicion < mails.length; posicion = posicion +1){
    console.log('la posicion actual es ' + posicion)
    console.log(`Mail enviafo a ${mails[posicion]}`)
} */


    //PRACTICA DE CLASES

//Ejercicio 1
/* let productos_vendidos_hoy = [
    'teclado',
    'monitor',
    'celular'
]

for(let posicion = 0; 
    posicion < productos_vendidos_hoy.length; 
    posicion = posicion + 1){
    alert(`Has vendido ${productos_vendidos_hoy[posicion]} exitosamente`)
} */

//EJERCICIO 2
/* Por cada producto vendido vamos a usar un document.write() donde pasaremos un string con el siguiente formato */
/* `<div>
    <h3>{nombre}</h3>
    <button>Ver estado de entrefa</button>
    <hr/>
</div>`

for(let iterador = 0; iterador < productos_vendidos_hoy.length; iterador = iterador + 1){
    document.write(
    `<div>
    <h3>${productos_vendidos_hoy[iterador]}</h3>
    <button>Ver estado de entrega</button>
    <hr/>
</div>`
)
} */

//otra forma de escribir el codigo de BUCLE FOR
//FOR OF: se usa para recorrer arrays

/* for(let producto of productos_vendidos_hoy){
    document.write(
        `<div>
        <h3>${producto}</h3>
        <button>Ver estado de entrega</button>
        <hr/>
    </div>`
    )
} */

let productos = [
    {
        titulo: 'tv samsung 32',
        precio: 400000,
        id: 1,
        descripcion: 'Es una tv normal, no hay mucho que decir'
    },
    {
        titulo: 'tv samsung 42',
        precio: 600000,
        id: 2,
        descripcion: 'Es una tv normal pero mas grande, no hay mucho que decir'
    },
    {
        titulo: 'tv samsung 50',
        precio: 800000,
        id: 3,
        descripcion: 'Es una tv normal mucho mas grande, no hay mucho que decir'
    }
]
//por cada producto generar un div con la siguiente estructura
/* 
`
<div>
    <h3>{titulo}</h3>
    <p>{descripcion}</p>
    <span>Precio: <b>$${precio}</b></span>
    <button>Comprar</button>
    </div>`
 */

//se pueden ver los prototipos en consola
/* console.log(productos) */



//METODOS DE ARRAYS: son acciones predefinidas que estan asociadas al prototipo de los arrays, los prototipos son como esquemas donde se define que va a pasar con cada tipo de dato


//PUSH: sirve para agregar elementos al final del array, es uno de los que mas se usa, IMPORTANTE

/* productos.push(
    {
        titulo: 'nuevo producto',
        precio: 3800,
        id: 4,
        descripcion: 'lorem ipsum'
    }
) */

//UNSHIFT : sirve para agregar un elemento al principio del array, los otros se mueven hacia la derecha, no se suele usar mucho

/* productos.unshift(
    {
        titulo: 'nuevo producto',
        precio: 3800,
        id: 4,
        descripcion: 'lorem ipsum'
    }
) */

//POP: para eliminar el ultimo elemento del array, y lo retorna, con una variable llamando por consola
/* let producto_eliminado = productos.pop()

console.log('has eliminado a ', producto_eliminado ) */

//SHIFT : elimina el primer elemento del array y lo retorna, no se usa mucho
/* let producto_eliminado = productos.shift()

console.log('has eliminado a ', producto_eliminado )
*/

//INDEXOF : nos permite buscar el indice/posicion de un elemento del array, solo funciona correctamente con array de STRINGS

/* let nombres = ['pepe', 'juan', 'pedro']
nombres[nombres.indexOf('juan')] ='thor'
console.log(nombres.indexOf('juan')) */
//console.log(nombres)

//INCLUDES: solamente se puede utilizar con array de strings, nos permite saber si un elemento esta incluido en un array. devuelve un boolean. SE USA BASTANTE

/* let carrito =['tv', 'empanadas', 'vaso']
console.log(carrito.includes('empanadas'))
*/

//SPLICE: (empalmar), se puede: eliminar, agregar, reemplazar elementos dentro de un array, no se usa taaaanto

let nombres = ['pepe', 'juan', 'pedro']
//eliminar a juan
//nombres.splice(1, 1)

//agregar a belen en la posicion de juan sin eliminarlo
//nombres.splice(1, 0, 'belen')

//reemplazar a juan por belen
//nombres.splice(1, 1, 'belen')
//o tambien nombres.splice(nombres.indexOf('juan'), 1, 'belen')
//console.log(nombres)

console.log(productos)

for(let producto of productos){
    document.write(
        `
        <div>
            <h3>${producto.titulo}</h3>
            <p>${producto.descripcion}</p>
            <span>Precio: <b>$${producto.precio}</b></span>
            <button>Comprar</button>
        </div>`
    )
}

/* let nombres = ['pepe', 'juan', 'pedro']

let nuevoNombre = prompt('ingrese nuevo nombre')
nombres.push(nuevoNombre)
console.log(nombres) */