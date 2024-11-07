import React, { useState } from 'react'
import extractFormData from '../Helpers/extractFormData'
import { getFormattedDateMMHHDDMM } from '../Helpers/getFormattedTime'

const FormulariosScreen = () => {

    //creamos un estado que empieza como array vacio
    const [usuarios, setUsuarios] = useState([])

    const [errors, setErrors] = useState({nombre: null, contraseña: 'Tu contraseña es invalida'})

    //pregunta tecnica: si yo hago un push osea agrego un elemento al array, que pasara?Se imprime en pantalla

    //Queres controlar los inputs o preferis esperar a que el usuario envie el formulario

    //no controlar gasta menos recursos

    const handleSubmitUncontrolledForm = (evento) => {
        evento.preventDefault()
        //el preventdefault es necesario hacer cada vez que se pone un formulario para prevenir qeu se recargue la pag
        //El evento es un objeto con datos del evento en particular

        //el target de un evento es el elemento html que emitio dicho evento
        const form_jsx = evento.target

        //FormData me devuelve un objeto con el que puedo manipular mi formulario
        
        const nuevo_usuario = extractFormData(form_jsx)

        let hayErrores = false

        if (!nuevo_usuario.nombre) {
            setErrors(( prevStateErrors )=>{
                return {...prevStateErrors, nombre: 'Falta un nombre'}
            })
            hayErrores = true
        }
        if (!nuevo_usuario.contraseña){
            setErrors(( prevStateErrors )=>{
                return{...prevStateErrors, contraseña: 'Falta una contraseña'}})
            hayErrores = true
        }


        if (!hayErrores) {
            setErrors({nombre: null, contraseña: null})
            nuevo_usuario.hora_creacion = getFormattedDateMMHHDDMM()

        //agregar a mi estado el nuevo usuario
        //const usuarios2 = usuarios
        //usuarios2.push(nuevo_usuario)  ESTA MAAAL

        //esto es mejor
        setUsuarios([...usuarios, nuevo_usuario])

        console.log('formulario enviado')
        }
    }
    console.log(usuarios)
    return (
    <div>
        <h1>Formularios en React</h1>
        <form onSubmit={handleSubmitUncontrolledForm}>
            <label htmlFor='nombre'>Ingrese su nombre</label>
            <br/>
            <input type='nombre' id='nombre' name='nombre'/>
            {errors.nombre && <span style={{color: 'red'}}>{errors.nombre}</span>}
            <br/>
            <br/>

            <label htmlFor='contraseña'>Ingrese su contraseña</label>
            <br/>
            <input type='contraseña' id='contraseña' name='contraseña'/>
            {errors.contraseña && <span style={{color: 'red'}}>{errors.contraseña}</span>}

        <br/>
            <button type='submit'>Confirmar</button>
        </form>
        <UsersList users={usuarios}/>
    </div>
    )
}

const UsersList = ({users}) => {
    return (
        <div>
            {users.map(user => {
                return <UserCard nombre={user.nombre} contraseña={user.contraseña}/>
            })}
        </div>
    )
}
const UserCard = ({nombre, contraseña,}) => {
    return (
        <div>
            <h2>Nombre: {nombre}</h2>
            <h2>Contrasenia: {contraseña}</h2>
        </div>
    )
}

export default FormulariosScreen