//METODOS AVANZADOS DE ARRAY

//USER: nombre, email, remuneracion, puesto, tipo_contrato
const users = [
    {
        nombre: 'Luis',
        email: 'GmI7t@example.com',
        remuneracion: 2000,
        puesto: 'Programador',
        tipo_contrato: 'Indefinido',
        id: 1
    },
    {
        nombre: 'Carlos',
        email: 'jFpCf@example.com',
        remuneracion: 3000,
        puesto: 'Diseñador',
        tipo_contrato: 'Indefinido',
        id: 2
    },
    {
        nombre: 'Ana',
        email: 'jFpCf@example.com',
        remuneracion: 4000,
        puesto: 'Programador',
        tipo_contrato: 'Temporal',
        id: 3
    },
    {
        nombre: 'Pedro',
        email: 'jFpCf@example.com',
        remuneracion: 5000,
        puesto: 'Gerente',
        tipo_contrato: 'Indefinido',
        id: 4
    }
]

//dame una lista con todos aquellos usuarios que sean programadores 

/* 
esta es la forma aprendida, la otra es mejor

const programadores = []
for(let usuario of users){
    if(usuario.puesto === 'Programador'){
        programadores.push(usuario)
    }
}

console.log(programadores) */

/* 
esta esta mejor

function filtrarProgramadores (usuarios){
    const programadores = []
    for(let usuario of usuarios){
        if(usuario.puesto === 'Programador'){
            programadores.push(usuario)
        }
    }
    return programadores    
}

let resultado = filtrarProgramadores(users)
console.log(resultado) */

//traeme a los que cobran mas de 2500

/* 
esta sigue la misma logica que la de arriba

function filtrarUsuariosPorRemuneracion(usuarios, remuneracion){
    const usuariosFiltrados = []
    for(const usuario of usuarios){
        if(usuario.remuneracion > remuneracion){
            usuariosFiltrados.push(usuario)
        }
    }
    return usuariosFiltrados
}

console.log(filtrarUsuariosPorRemuneracion(users, 2500)) */

//Principio DRY: DONT REPEAT YOURSELF

//CALLBACK FUNCTION
//la lisla es el array a recibir[]
//callbackFnCondicion:  es una funcion recibida por parametro que devolvera la condicion


/* 
function filtrar (lista, callbackFnCondicion){
    const result = []
    for(const elemento of lista){
        //invoco a mi funcion y le paso el elemento
        if(callbackFnCondicion(elemento)){
            result.push(elemento)
        }
    }
    return result
}

/* function condicionRemuneracion (usuario){
    return usuario.remuneracion > 2500
} 
*/
/* 
function condicionDiseñadores(usuario){
    return usuario.puesto === 'Diseñador'
}

let usuariosRemuneracionAlta = filtrar(users, condicionRemuneracion)
console.log(usuariosRemuneracionAlta)

let diseñadores = filtrar(users, condicionDiseñadores)
console.log(diseñadores) */ 

//mi funcion de filtrado puede trabajar con cualquier array, solo necesito ir creando la funcion de condicion, EN JAVASCRIPT YA EXISTE LA FUNCION DE FILTRO

//Los ARRAYS tienen metodos

//FILTER
//users.filter()

//CALLBACK es una funcion pasada por parametro

//ejemplo de callback con funcion anonima
/* 
const resultado = users.filter(
    function(usuario){
        return usuario.remuneracion > 2500
    }
) 
*/
//si un usuario tiene incluido en su nombre la c

/*
const resultado2 = users.filter(
    function(user){
        return user.nombre.includes('C')
    }
)
console.log(resultado2)  
*/

//Productos: precio, nombre, stock, descripcion, id

const products = [
    {
        precio: 2000,
        nombre: 'Laptop',
        stock: 40,
        id: 1,
        descripcion: 'Laptop de 15 pulgadas'
    },
    {
        precio: 3000,
        nombre: 'Tablet',
        stock: 3,
        id: 2,
        descripcion: 'Tablet de 10 pulgadas'
    },
    {
        precio: 4000,
        nombre: 'Monitor',
        stock: 2,
        id: 3,
        descripcion: 'Monitor de 15 pulgadas'  
    },
    {
        precio: 5200,
        nombre: 'Monitor',
        stock: 2,
        id: 80,
        descripcion: 'Monitor de 25 pulgadas'  
    },
    {
        precio: 5000,
        nombre: 'Mouse',
        stock: 10,
        id: 4,
        descripcion: 'Mouse'
    },
    {
        precio: 6000,
        nombre: 'Teclado',
        stock: 70,
        id: 5,
        descripcion: 'Teclado'
    },
    {
        precio: 7000,
        nombre: 'Audifonos',
        stock: 4,
        id: 6,
        descripcion: 'Audifonos'
    }
]

//Filtrar por los productos que su stock sea mayor o igual a 5

//Filtrar por los productos que su precio este entre 4500 y 5500

//Filtrar por los productos que su descripcion contenga la palabra 'Moni'

/* const resultado = products.filter(
    function(product){
        return product.stock >= 5
    }
)
console.log(resultado)

const resultado1 = products.filter(
    function(product){
        return (product.precio >= 4500 && product.precio <= 5500)
    }
)
console.log(resultado1)

const resultado2 = products.filter(
    function(product){
        return product.descripcion.includes('Moni')
    }
)
console.log(resultado2) */

//FUNCION NORMAL O ES5/commonJS (asociado al antiguo js)

/* function saludar(nombre){
    alert('hola' + nombre)
} */

//ARROW FUNCTION O FUNCION EN FLECHA en ES6

const saludar = (nombre) => {
    alert('hola' + nombre)
}

//Mejoras:
//Retorno implicito (solo funciona si no hay llaves)
//cuando la funcion en flecharecibde un solo parametro, se pueden obviar los parentesis

const sumar = (a, b) => a + b

//es lo mismo que

const sumar2 = (a, b) => {return a + b}

//Cuando conviene usar retorno implicito?

//CASO FUNCION 1   NO CONVIENE USAR RETORNO IMPLICITO
//quiero mostrar por alerta un hola
//solicitar un nombre
//despedirse por consola
//devolvera true

const doAction = () =>{
    alert('hola')
    let nombre = prompt ('ingresa tu nombre')
    console.log('chau')
    return true
}

//CASO FUNCION 2   CONVIENE USAR RETORNO IMPLICITO
//quiero una funcion que reciba un valor y me diga si el typeof es string 

const validarString = (value) => typeof(value) === 'string'

//o


const validarString2 = (value) => {
    return typeof(value) === 'string'
}



//METODOS DE ARRAY

//FILTER : para filtrar a los elementos por X condicion
//Devuelve SIEMPRE un array, incluso si nadie cumple la condicion, en ese caso devuelve un array vacio
//Recibe una callbackFn (funcion) y ejecutara la callback por cada elemento del array y aquel elemento que cuando sea pasados y de un valor verdadero, entonces sera agregado al array

users.filter(user => user.email === 'pepito@gmail.com')
//devuelve: [usuarios que cumplan la condicion]


//FIND : buscar UN elemento dentro el array, generalmente asociado a la busqueda por id, tambien puede ser por cuit 
//Recibe una callbackFn (funcion) y ejecutara la callback por cada elemento del array y aquel elemento que cuando sea pasados y de un valor verdadero, entonces cortara la ejecucion de find y retornara dicho elemento
//si no lo encuentra o nadie cumple la condicion, devolvera UNDEFINED

const usuarioBuscado = users.find((user) => user.id === 1)
//devuelve el usuario que cumple la condicion o undefined


//FINDINDEX : nos sirve para buscar UN indice de x elemento dentro del array
//Recibe una callbackFn (funcion) y ejecutara la callback por cada elemento del array y aquel elemento que cuando sea pasados y de un valor verdadero, entonces cortara la ejecucion de findindex y retornara la posicion del elemento
//si no lo encuentra o nadie cumple la condicion, devolvera -1

const usuarioIndice = users.findIndex((user) => user.id === 1)
//devuelve la posicion del usuario o -1


//SOME: ver si al menos UN usuario cumple con x condicion
//Recibe una callbackFn (funcion) y ejecutara la callback por cada elemento del array y aquel elemento que cuando sea pasados y de un valor verdadero, entonces cortara la ejecucion de some y retornara un true
//devuelve un booleano (true o false)

let hayUnDiseñador = users.some(user => user.puesto === 'Diseñador')


//EVERY : verifica si todos los elementos cumplen con X condicion
//Recibe una callbackFn (funcion) y ejecutara la callback por cada elemento del array y aquel elemento que cuando sea pasados y de un valor falsy, entonces cortara la ejecucion de every y retornara un false, si todos cumplen la condicion devuelve un true
//devuelve un boolean

let todosTienenPuesto = users.every((user) => user.puesto.length > 0)


//FOREACH: ejecuta una callback por cada elemento de mi array (es un for of pero como metodo)
//Devuelve UNDEFINED siempre

users.forEach((user) => {
    console.log(user.nombre)
})


//MAP : MAS DIFICIL DE TODOS, queda para mas adelante

