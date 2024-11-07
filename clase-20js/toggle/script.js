const contenedorHTML = document.getElementById('contenedor')
const btnOcultarHTML = document.getElementById('btn-ocultar')

//cuando le demmos click al boton de ocultar, debe mostrarse por consola: 'has ocultado algo'

//EVENTOS: son acciones que cuando ocurren, sucede otra accion 

//Declaracion de una funcion
function mostrarMensaje (){
    console.log('Has ocultado algo')
}
//llamado o invocacion de la funcion
//mostrarMensaje()

//Referenciar mi funcion, hace referencia a transferir la accion, va sin parentesis al final
//btnOcultarHTML.onclick = mostrarMensaje


//hay tres formas de manejar eventos en JS:

/* 
1_ Asignar la funcion al elemento HTML como atributo 'onclick' es MALA PRACTICA ej
<button id="btn-ocultar" onclick="mostrarMensaje()">Ocultar</button>

2_Llamar al boton y asignarle la funcion a la propiedad onClick, ESTO ES MEJOR PRACTICA
btnOcultarHTML.onclick = mostrarMensaje

3_addEventListener nos sirve para asignarle un evento a un elemento de HTML, recibe 2 parametros: el tipo de evento entre comillas y despues la funcion SIN INVOCARLA osea sin parentesis. ES LA MEJOR FORMA DE TRABAJAR CON EVENTOS 
btnOcultarHTML.addEventListener('click', mostrarMensaje)
*/


//mouseover es el evento HOVER en js, y mouseout lo realiza cuando dejas de apollar en algo

//cuando le demmos click al boton de ocultar, debemos OCULTAR EL DIV CONTENEDOR
/* 
ESTA ES UNA FORMA PERO NO ES BUENA
function ocultarCartel (){
    contenedorHTML.style.display = 'none'
}

btnOcultarHTML.addEventListener('click', ocultarCartel) */

//el metodo toggle o interruptor nos permite interpolar una clase. si la clase está, la elimina, si no está la agrega
/* function toggleCartel (){
    contenedorHTML.classList.toggle('hidden')
}

btnOcultarHTML.addEventListener('click', toggleCartel) */


//TAREA DE LA CLASE
const mensajePresentacion = document.getElementById('oculto')
const btnMensaje = document.getElementById('btn-mensaje')

function mensajeCompleto(){
    let estaOculto = mensajePresentacion.classList.contains('hidden')
    btnMensaje.innerText = estaOculto ? 'Ver menos' : 'Ver mas'
    mensajePresentacion.classList.toggle('hidden')
    /* btnMensaje.innerText = btnMensaje.innerText === "Ver mas" ? "Ver menos" : "Ver mas"; */
}

btnMensaje.addEventListener('click', mensajeCompleto)