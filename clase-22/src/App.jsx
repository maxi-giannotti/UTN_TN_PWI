import React from 'react'
import pi, {sumar as add, restar} from './math.js'

/* 
Si nuestro modulo trabaja con componentes, ese modulo debe tener como extension .jsx
Los archivos .jsx traen una nueva sintaxis por ejemplo nos permiten escribir HTML como si fuera un nuevo tipo de dato

Si nuestro archivo tiene componentes, entonces debemos importar a React. SIEMPRE
*/

/* 
Esta funcion es un Componente, decimos que es un componente porque devuelve HTML
*/

const mostrarMensaje = () => {
  alert('soy un mensaje')
}

function App() {
  console.log(pi)
  console.log(add(1,2))
  let nombre = prompt ('ingrese su nombre')
  return (
    <div>
      {
        nombre
        ? <h1>Hola {nombre}</h1>
        : <h1>Hola desconocido</h1>
      }
      
      <button onClick={mostrarMensaje}>Click</button>
      <div>Resultado: {add(1, 2)}</div>
    </div>
  )
}

export default App
