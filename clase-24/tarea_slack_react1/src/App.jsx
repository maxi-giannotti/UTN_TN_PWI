import React from 'react'
import './global.css'



function App() {

    const users = [
        {
            nombre: 'Candia',
            avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07ESQU0R7D-ea383db445e8-24',
            status: 'activo',
        },
        {
            nombre: 'Emanuel Carreira',
            avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07F5J8NGCR-ec3380dac16d-24',
            status: 'inactivo',
        },
        {
            nombre: 'Fede Rabbia',
            avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07ESU2R35Y-e7a6bc16ffb4-24',
            status: 'inactivo',
        },
        {
            nombre: 'Gaston Ferrari',
            avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07EVCX98H2-7b2952b1bb15-512',
            status: 'activo',
        },
        {
            nombre: 'Leandro Bolletta',
            avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07EQ3ET7RB-ffafbbc87ff9-24',
            status: 'inactivo',
        },
        {
            nombre: 'Lio Silman',
            avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07ESQTRNJF-20622c72af58-48',
            status: 'activo',
        },
        {
            nombre: 'Lucas Legor',
            avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07F5J8DSQH-773273a440d1-192',
            status: 'inactivo',
        },
        {
            nombre: 'Marco Ceppi',
            avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07FSFB1P4Z-d4026d02ef44-192',
            status: 'activo',
        }
    ]

    const userList = users.map(
        (user) => {

            return (
                <div className="user">
                    <img className="img_avatar"src= {user.avatar} />
                    <span 
                    className= {user.status == 'activo' ? 'activo' : 'inactivo'}>
                    </span>
                    <span>{user.nombre}</span>
                    <span className= "delete"><i class="bi bi-x-lg"></i></span>
            </div> 
            )
        }
    )

    return (
        <div className='contenedor'>
            {userList}
        </div>
    )
}

export default App
