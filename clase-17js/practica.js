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

function eliminarProductoPorId (id_producto){

    let posicionProductoEliminar
    /* logica para eliminar el producto */
    //Problema: saber la posicion del elemento a eliminar
    //tenemos que buscar la posicion del producto que su id sea igual al id recibido
    
    //estructura para recorrer el array
    for(let posicion = 0; posicion < productos.length; posicion = posicion + 1){

        /* tipado: 
        posicion = number, es la posicion que estoy recorriendo de mi array 
        productos.length = number, es la longitud del array (cantidad de elementos (productos)) 
        productos = array, lista de producto 
        producto = objet  
        id_producto = number, el id recibido en la funcion (el id a buscar)
        posicionProductoEliminar = number, representa el producto a eliminar
        */

        let producto = productos[posicion]
        if(producto.id === id_producto){
            posicionProductoEliminar = posicion
        }
    }
    /* que metodo usamos para eliminar puntualmente? splice, requiere de la posicion, la cantidad */
    productos.splice(posicionProductoEliminar, 1)
}
eliminarProductoPorId(2)
//eliminarProductoPorId(3)
console.log(productos)