/* const btnRegisterHTML = document.getElementById('btn-register')
const modalHTML = document.querySelector('.modal-container')
const btnCloseModalHTML = document.querySelector('.btn-close')

function openModal(){
    modalHTML.classList.remove('hidden')
}

function closeModal(){
    modalHTML.classList.add('hidden')
}

btnRegisterHTML.addEventListener('click', openModal)
btnCloseModalHTML.addEventListener('click', closeModal) */

//FUNCION ANONIMA, no conviene hacerla cuando vas a realizar un evento mas de una vez en tu pagina, no se le declara un nombre y se hace dentro, por ejemplo:(se recomienda no usar ahora)
/* btnCloseModalHTML.addEventListener('click', function(){
    modalHTML.classList.add('hidden')
}) */

    //KEYDOWN cuando un usuario aprieta una tecla
    //KEYUP cuando un usuario deja de apretar una tecla
    //KEYPRESS es lo mismo que keydown
/* function capturarTecla(){
    console.log('el usuario apreto una tecla')
}
document.addEventListener('keydown', capturarTecla) */

//el evento es un objeto con datos del evento, OJO este objeto suele cambiar entre distintos tipos de eventos 
//el target del evento es DE DONDE se ejecuto el evento
//el value es EL VALOR del input, osea lo que se puso

const formularioHTML = document.getElementById('formulario')
function enviarFormulario(evento){
    evento.preventDefault()
    const formulario = evento.target
    console.log(formulario.nombre.value)
    //los formularios, POR DEFECTO RECARGAN la pagina
    console.log('se envio el formulario')
}
formularioHTML.addEventListener('submit', enviarFormulario)