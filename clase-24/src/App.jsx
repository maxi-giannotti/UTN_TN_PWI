import React from 'react'
import './global.css'

function App() {
  function saludarPersona({ nombre, edad }) {

    console.log(`FUNCION Hola me llamo ${nombre} y tengo ${edad} años`)
  }
  let persona_x = { nombre: 'juan', edad: 48, apellido: 'suarez' }

  saludarPersona(persona_x)

  const workspaces = [
    {
      nombre: 'UTN PW',
      logo: 'direccion',
      miembros: [
        {
          nombre: 'pepe',
          avatar: 'direccion'
        },
        {
          nombre: 'pepe',
          avatar: 'direccion'
        }
      ]
    },
    {
      nombre: 'UTN PW',
      logo: 'direccion',
      miembros: [
        {
          nombre: 'pepe',
          avatar: 'direccion'
        },
        {
          nombre: 'pepe',
          avatar: 'direccion'
        }
      ]
    }
  ]

  const workspacesJSXList = workspaces.map(
    (workspace) => {
      return (
        <div>
          <img src={workspace.logo}></img>
          <h2>{workspace.nombre}</h2>
          <span>{workspace.miembros.length}</span>
        </div>
      )
    }
  )

  //NUEVO DESAFIO: buscar la forma de transformar mi array de objetos en un array de jsx
  //.map  ES ELEMENTAL EN JAVASCRIPT, sirve para transformar arrays en otros array
  //Devuelve un array como filter, pero con la misma cantidad de elementos qur el array original
  //lo que devuelva mi callback se guardara como elemento del array resultante. debe tener un RETURN sino devuelve undefined
//transformar este array en [{dia: 'lunes', letras: 5},{dia: 'martes', letras: 6}, {dia:'miercoles',letras: 9}]

  const dias = ['lunes', 'martes', 'miercoles'] 
  const diaDetalle = dias.map(
    (dia) => {
      return {dia: dia, letras: dia.length}
    }
  )
  console.log(diaDetalle)

//JSXList o array
const lista =[
  <div>hola</div>,
  <div>hola</div>,
  <div>hola</div>
]

  return (
    <div>
      {workspacesJSXList}
      
      {lista}
      <Navbar
        title={'Hola mundo'}
        backgroundColor='red'
        objeto={
          { valor_1: 1 }
        } />
      <h1>Hola</h1>
      <CashCard
        nombre='CHRISTIAN VIZCARRA'
        saldo='$15.872'
        logo_tarjeta='masterc'
        numero='4209 **** **** 0210'
      />
      <br />
      <CashCard
        nombre='CHRISTIAN VIZCARRA'
        saldo='$98.581'
        logo_tarjeta='masterc'
        numero='4209 **** **** 9834'
      />
      <br />
      <CashCard
        nombre='CHRISTIAN VIZCARRA'
        saldo='$45.786'
        logo_tarjeta='VISA'
        numero='4209 **** **** 3462' />
    </div>
  )
}

/* 
CSS as objet
StyleComponents
*/

const Navbar = (props) => {
  return (
    <header style={
      {
        backgroundColor: props.backgroundColor
      }
    }
      className='navbar'
    >
      <h2>{props.title}</h2>
      <nav>
        <a href='#'> Home</a>
        <a href='#'> About</a>
        <a href='#'> Contact</a>
      </nav>
    </header>
  )
}

/* Las PROPS son un objeto que recibe el componente, TODOS los componentes reciben a props, se definen como si fueran atriburos de HTML */
/* Los componentes tienen propiedades que caracterizan al componente, por ejemplo: imagenes, textos, titulos */

const CashCard = ({ nombre, saldo, logo_tarjeta, numero }) => {
  return (
    <div className='cashcard'>
      <div className='headcard'>
        <span>{saldo}</span>
        <span>{logo_tarjeta}</span>
      </div>
      <div className='numbercard'>
        <div className='namecard'>
          <span>{numero}</span>
          <span>{nombre}</span>
        </div>
        <button className='button'> . . . </button>
      </div>
    </div>
  )
}



export default App
