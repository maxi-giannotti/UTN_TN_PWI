let productos = [
    {
        titulo: 'Coca Cola',
        precio: 1000,
        descripcion: 'bebida energetica',
        stock: 10,
        id: 1
    },
    {
        titulo: 'Sprite',
        precio: 1200,
        descripcion: 'bebida energetica sabor limon',
        stock: 5,
        id: 2
    },
    {
        titulo: 'Fanta',
        precio: 1400,
        descripcion: 'bebida energetica sabor naranja',
        stock: 7,
        id: 3
    },
    {
        titulo: 'Pepsi',
        precio: 900,
        descripcion: 'bebida energetica',
        stock: 4,
        id: 4
    }
]

//Hacer una funcion que dado su id me permita btener un producto por su id y mostrarlo por consola

//esto es una JSDocs
/** tipado
**    producto_id = any parameter(cualquier tipo de dato), es el producto a buscar
**    producto = objeto variable, es el producto que estoy recorriendo en mi lista de productos
**    productos = array variable, es la lista de productos
**  Una funcion que recibe el Id del producto, lo busca y lo retorna, si no lo encuentra devolvera undefined
*/


function obtenerProductoPorId(producto_id, productos){
    //logica para buscar en la lista de productos por id

    //recorrer el array con un for of
    for(let producto of productos){
        if(producto.id === producto_id){
            return producto
        }
    }
}

/* let producto_encontrado = obtenerProductoPorId(2)
console.log('Producto encontrado:', producto_encontrado) */


//quiero enviar por mail el producto
//quiero enviar el producto a un servidor

//Una funcion que me permita obtener a todos los productos que su precio sea mayor a 1100
//Esta funcion retornara un array, que estara compuesto de los elementos que cumplan con la condicion de tener un precio mayor a 1100

function obtenerProductosMayoresA (precio) {
    //esta es la lista donde guardo aquellos productos que cumplan con la condicion
    let array_resultante = []
    for(let producto of productos){
        if(producto.precio > precio){
            array_resultante.push(producto)
        }
    }
    return array_resultante
}


//ahora hace una funcion que me devuelva a los productos que esten entre 100 y 200 pesos

/* let productosCaros = obtenerProductosMayoresA(950)

console.log(productosCaros)  */


//Crear una funcion que me permita dado un id, obtener la posicion del elemento en el array, si no lo encuentra debe devolver -1

//obtenerPosicionDelProductoPorId(2) //retorna 1
//obtenerPosicionDelProductoPorId(20) //retorna -1
//Recomendacion: Ver que bucle conviene usar

//Recorrer un array con for: for(let i = 0; i < array.length; i = i + 1)

function obtenerPosicionDelProductoPorId(id) {
    for (let i = 0; i < productos.length; i = i + 1) {
        if (productos[i].id === id) {
            return i 
        }
    }
    return -1
}

//console.log(obtenerPosicionDelProductoPorId(1))

//Una funcion que se llame hayAlgunProductoConXTitulo que recibira un titulo y nos devolvera true si algun producto tiene ese titulo o false si ninguno lo tiene

function hayAlgunProductoConXTitulo(titulo) {
    for (let producto of productos) {
        if (producto.titulo === titulo) {
            return true
        }
    }
    return false
}
//ej:
//console.log(hayAlgunProductoConXTitulo('Coca'))

/* RESOLUCION DE UNA DE LAS TAREAS
Sacar el promedio de algo:
const edades = [70, 60, 30, 20, 20, 40, 45]
let sumatoria = 0
for(let edad of edades){
    sumatoria = sumatoria + edad
}
let promedio = sumatoria / edades.length 

OTRO PROBLEMA (CREO QUE EL 14)

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
*/

//DRY : Dont Repeat Yourself

