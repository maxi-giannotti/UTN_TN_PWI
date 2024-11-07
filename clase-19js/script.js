/* DOM = Document Objet Model
El objeto DOM contiene una replica exacta como objeto con todos los datos de nuestro HTML
Propiedades:
-si el objeto es modificado, el HTML tambien se ve modificado
*/

//este seria el objeto DOM
//es una variable global creada al cargarse en script
//el console.dir nos permite ver los nodos del html como objetos
//console.dir(document)

//document.getElementById()  nos permite buscar un elemento en html en particular por su Id

//let titulo = document.getElementById('titulo')
/* console.dir(titulo.innerText) */

//titulo.innerText = 'para modificar'

/* 
Crear en HTML un span que tenga un id que sea 'resultado'

Solicitar al usuario 2 numeros y sumarlos
Mostrar en el span: 'el resultado de sumar (numero1) y (numero2) es (resultado)
*/

/* let num1 = prompt('Ingrese el primer numero')
let num2 = prompt('Ingrese el segundo numero')
let resultado = Number(num1) + Number(num2)
let texto = document.getElementById("resultado")

texto.innerHTML = `El resultado de sumar ${num1} y ${num2} es ${resultado}` */

//Para cambiar estilos con javascript

/* let tituloHTML = document.getElementById('titulo')
tituloHTML.style.fontSize = '90px'
tituloHTML.style.color = 'red' */

/* let contenedorHTML = document.getElementById('contenedor')

let producto = {
    nombre: 'tv samsung',
    precio: 400,
    stock: 4
}
let contenido = `
    <h2${producto.nombre}</h2>
    <span>Precio $${producto.precio}</span>
    <span>unidades disponibles: ${producto.stock}</span>
`

contenedorHTML.innerHTML = contenido */


//las const (CONSTANTES) se usan siempre para declarar un objeto o un array
/* const productos = [
    {
        nombre: 'tv samsung 32"',
        precio: 300,
        stock: 4,
    },
    {
        nombre: 'tv samsung 43"',
        precio: 400,
        stock: 4
    },
    {
        nombre: 'tv samsung 50"',
        precio: 600,
        stock: 40
    },
    {
        nombre: 'tv samsung 100"',
        precio: 10000,
        stock: 2
    }
]
const productsContainerHTML = document.getElementById('products-container') */
/* por cada producto del array de producto deberas crear un div y deberas guardarlo/acumularlo en el resultado
*/
/* let resultado = ''

for(const producto of productos){

    //si el producto cuesta mas de 5mil vamos a decir en un span que es muy caro
    let productoEsCaro = producto.precio > 5000


    resultado = resultado + `
<div>
<h2>${producto.nombre}</h2>
    <span>Precio: $${producto.precio}</span><br>
    <span>Unidades disponibles: ${producto.stock}</span>
    ${
        productoEsCaro ? '<span>el producto es caro!</span>' : ''
    }
    <button>Comprar</button>
    <hr>
</div>
`
}
 */
//productsContainerHTML.innerHTML = resultado 

//REENDERIZADO CONDICIONAL
//reenderizar es sinonimo de MOSTRAR

//operador ternario: es una forma de hacer condiciones en JS, como un if, pero nos permite abreviar

//sintaxis: condicion ? caso_verdadero : caso_falso

/* const productos = [
    {
        nombre: 'tv samsung 32"',
        precio: 300,
        stock: 4,
        comprado: true
    },
    {
        nombre: 'tv samsung 43"',
        precio: 400,
        stock: 4,
        comprado: false
    },
    {
        nombre: 'tv samsung 50"',
        precio: 600,
        stock: 40,
        comprado: true
    },
    {
        nombre: 'tv samsung 100"',
        precio: 10000,
        stock: 2,
        comprado: false
    }
]

let resultado = ''

for(const producto of productos){

    resultado = resultado + `
<div>
<h2>${producto.nombre}</h2>
    <span>Precio: $${producto.precio}</span><br>
    <span>Unidades disponibles: ${producto.stock}</span>
    ${
        producto.comprado ? 'Comprado' : '<button>Comprar</button>'
    }
    
    <hr>
</div>
`
}
const productsContainerHTML = document.getElementById('products-container')
productsContainerHTML.innerHTML = resultado  */
//si el producto esta comprado, entonces debera decir comprando en vez de comprar, sino comprar


//SEGUNDO

const productos = [
    {
        nombre: 'tv samsung 32"',
        precio: 300,
        stock: 1,
        comprado: true
    },
    {
        nombre: 'tv samsung 43"',
        precio: 400,
        stock: 0,
        comprado: false
    },
    {
        nombre: 'tv samsung 50"',
        precio: 600,
        stock: 5,
        comprado: true
    },
    {
        nombre: 'tv samsung 100"',
        precio: 10000,
        stock: 0,
        comprado: false
    }
]
const productsContainerHTML = document.getElementById('products-container')

let resultado = ''

for(const producto of productos){
    let sinStock = producto.stock === 0
    resultado = resultado + `
<div>
<h2>${producto.nombre}</h2>
    <span>Precio: $${producto.precio}</span><br>
    ${
        sinStock ? '<span>Ya no quedan unidades disponibles</span>' : `<span>Unidades disponibles: ${producto.stock}</span>`
    }
    ${
        producto.comprado ? '<button>Comprado</button>' : '<button>Comprar</button>'
    }
    <hr>
</div>
`
}

productsContainerHTML.innerHTML = resultado 

//Si el stock es 0 decir 'Ya no quedan unidades disponibles' Si es mayor a 0 decir 'Unidades disponibles: 0'