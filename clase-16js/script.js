//OBJETOS

/* let propiedadNueva = prompt('Ingrese una nueva propiedad a mi objeto')
let valorNuevo = prompt('Ingrese el nuevo valor') */

//Objeto literal, se escribe asi: 
/* let usuario ={
    'nombre': 'pepe',
    'apellido': 'suarez',
    'edad': 15,
    'esCliente': false,
    'direccion': {
        'pais': 'AR',
        'provincia': 'Buenos Aires',
    },
}/*

//para crear la propiedad (mala practica) se usa
//usuario.dinero = 40000
//o
//usuario['dinero'] = 40000


//para cambiar propiedad se usa:
//usuario.esCliente = true



//console.log(usuario.direccion)

//cuando llamo a una propiedad que no existe, aparece un UNDEFINED
//por ejemplo console.log(usuario.age)

//Eliminar propiedad (MUY mala practica) las funciones o codigo dependientes de su objeto fallaran si eliminamos propiedades utiles
//delete usuario.edad

//declaracion
/* function presentarUsuario (usuario){
    console.log(`Hola me llamo ${usuario.nombre} ${usuario.apellido} y tengo ${usuario.edad}`)
} */
//invocacion
//presentarUsuario(usuario)


/* let propiedadAMostrar = prompt('Ingrese la propiedad a mostrar')

alert(usuario[propiedadAMostrar]) */

//si hacemos esto
//alert(usuario.propiedadAMostrar)
//JS entiende esto
//usuario['propiedadAMostrar']

//para mostrar por consola una propiedad especifica del objeto se ponen corchetes y entre comillas, por ej:
//console.log(usuario['nombre'])
//Se conoce como NOTACION DE CORCHETES, es la forma estandar que viene con js
//console.log(usuario['direccion']['pais'])
//NOTACION DE PUNTOS
//Consideraciones: mas comodo pero no funciona cuando las propiedades tienen espacios, guiones, operadores (+-*/%), coma. El guion bajo, simbolo de pesos o camelCase si se puede.
//console.log(usuario.esCliente)



//el orden de las propiedades no es importante
/* Crear el objeto producto que tenga titulo, precio, id, stock, vendedor */

/* let producto ={
    'titulo': 'silla',
    'precio': 5000,
    'id': 'silla-blanca654',
    'stock': 10,
    'vendedor': {
        'nombre': 'compumundo',
        'id': 1,
    },
    'divisa': 'usd',
}

console.log(producto['vendedor']['nombre']) */


//PRACTICA EN CLASES

//EJERCICIO 1
/* Crear una funcion llamada crearProducto
la funcion recibira titulo, precio y categoria del producto
INICIALMENTE EL PRODUCTO TENDRA stock en 0 y la propiedad estado en false
La funcion debera devolver el producto creado y luego para verificar que este correcto deberas mostrarlo en la consola */



function crearProducto(titulo, precio, categoria) {
    let producto = {
        'titulo': titulo,
        'precio': precio,
        'categoria': categoria,
        'stock': 0,
        'estado': false
    }
    return producto
}
let producto = crearProducto("yerba",3500,"alimento")
let producto1 = crearProducto("mermelada",2300,"alimento")
/* console.log(producto, producto1) */

//EJERCICIO 2
/* Crear una funcion llamada mostrarProducto, la funcion recibira el producto previamente creado y construira un string con el siguiente formato

etc etc
*/

function mostrarProducto(producto){
    let productoHTML = `<div>
    <h3>${producto.titulo}</h3>
    <span><b>Precio:</b>${producto.precio}</span>
    <span><b>Categoria:</b>${producto.categoria}</span>
    </div>
    `
    document.write(productoHTML)
}
mostrarProducto(producto)
mostrarProducto(producto1)
