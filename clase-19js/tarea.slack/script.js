const users = [
    {
        nombre: 'Candia',
        avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07ESQU0R7D-ea383db445e8-24',
        status: 'activo',
        writing: 'false'
    },
    {
        nombre: 'Emanuel Carreira',
        avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07F5J8NGCR-ec3380dac16d-24',
        status: 'inactivo',
        writing: 'false'
    },
    {
        nombre: 'Fede Rabbia',
        avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07ESU2R35Y-e7a6bc16ffb4-24',
        status: 'inactivo',
        writing: 'true'
    },
    {
        nombre: 'Gaston Ferrari',
        avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07EVCX98H2-7b2952b1bb15-512',
        status: 'activo',
        writing: 'false'
    },
    {
        nombre: 'Leandro Bolletta',
        avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07EQ3ET7RB-ffafbbc87ff9-24',
        status: 'inactivo',
        writing: 'false'
    },
    {
        nombre: 'Lio Silman',
        avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07ESQTRNJF-20622c72af58-48',
        status: 'activo',
        writing: 'false'
    },
    {
        nombre: 'Lucas Legor',
        avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07F5J8DSQH-773273a440d1-192',
        status: 'inactivo',
        writing: 'false'
    },
    {
        nombre: 'Marco Ceppi',
        avatar: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07FSFB1P4Z-d4026d02ef44-192',
        status: 'activo',
        writing: 'true'

    }

]

const usersContainerHTML = document.getElementById('users_container')

let usersContainer = ''

for (const user of users) {


    let statusUser = user.status == 'activo'

    let statusWriting = user.writing == "true"

    usersContainer = usersContainer +
        `
            <div class="user">
                <img src='${user.avatar}'>
                <span 
                    class="status ${statusUser ? 'activo' : 'inactivo'}">
                    ${statusUser ? '' : '<i class="fa-regular fa-circle"></i>'}
                </span>
                <span>${user.nombre}</span>
                <span class= "delete"><i class="bi bi-x-lg"></i></span>
                <span>
                <i class="${statusWriting ? 'fa-solid fa-pen' : ''}"></i>
                </span>
            </div>
        `
}

usersContainerHTML.innerHTML = usersContainer;