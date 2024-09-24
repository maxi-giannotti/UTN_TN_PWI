//FUNCIONES
//su principal uso es reutilizar logica de programacion

//Declaramos la funcion saludar
/* function saludar() {
    alert('Este es el mejor saludo del mundo!')
}
//Invocamos a la funcion saludar (se puede invocar las veces que uno quiera):
saludar() */

//Crear la funcion preguntarNombre que solicitara el nombre de usuario y dira por alerta 'tu nombre es (nombre_ingresado)

/* function preguntarNombre(){
    let nombre_ingresado = prompt ('Ingrese su nombre de usuario')
    alert(`Tu nombre de usuario es ${nombre_ingresado}`)
}

preguntarNombre() */

//los parametros (lo que se escribe dentro de los parentesis) son valores que mi funcion va a recibir
/* function saludar( nombre ) {
    alert(`Que tal ${nombre}?`)
}

saludar('pepe')
saludar('maria') */

/* function calcularIva (precio) {
    alert('EL iva de tu producto es ' + (precio - precio * 0.21))
}

calcularIva(100)
calcularIva(10) */

//la coma indica que voy a agregar un segundo parametro. se pueden agregar hasta 255 parametros (igual no vamos a llegar a esa cantidad)

function sumar (a, b){
    return Number(a) + Number(b)
}

let resultado = sumar(40, 56)
/* alert(resultado) */
/* document.write(resultado) MALA PRACTICA*/
/* document.write('<h1>hola</h1>') MALA PRACTICA*/