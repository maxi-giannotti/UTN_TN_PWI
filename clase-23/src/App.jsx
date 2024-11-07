import React from "react"

function App() {
  let num1 = 1
  let num2 = 2

  //renedrizado condicional
  let estaComprado = false
  let estaLogueado = false
  let statusAbierto = 'Abierto'
  let espacioConsumido = 10
  let espacioTotal = 10
  let porcentajeDeEspacioLimite = espacioTotal * 0.2
  let espacioCercaDelLimite = espacioConsumido > espacioTotal - porcentajeDeEspacioLimite
  return (
    <div className="caja caja-especial">
      <h1>Hello World</h1>
      <Caja/>
      <Caja/>
      <Caja/>
      <h2>Resultado {num1} + {num2} = {num1 + num2}</h2>
      {
        <div>
          <div></div>
          <div></div>
        </div>
      }
      {
        estaComprado
          ? <button>Comprado</button>
          : <button>Comprar</button>
      }
      <br/>

      <button disabled={estaComprado}>Comprar</button>
      {!estaLogueado && <a href="a">Log in</a>}

      <br/>

      { espacioCercaDelLimite 
        &&
        <div>
          { espacioConsumido === espacioTotal
            ? <span>Has consumido todo tu espacio </span>
            : (
            espacioConsumido > espacioTotal
              ? <span>No puedes hacer mas operaciones, has consumido todo tu espacio</span>
              : <span>Espacio cerca de consumirse </span>
            )
          }
          <a href = '#'>Mejorar plan</a>
        </div>
      } 
      {
        statusAbierto === 'Abierto'
          ? <button>Cerrar</button>
          : <button>Abrir</button>
      }

    </div>
  )
}

function Caja (){
  return(
    <div>
      <div>hola</div>
      <div>chau</div>
    </div>
  )
}

export default App


/* 
los componentes son:
Funciones que devuelven JSX (html)
*/