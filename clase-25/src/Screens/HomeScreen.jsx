import React from "react";
import { WorkSpaceList } from "../Components";
import { Link } from "react-router-dom";


const HomeScreen = () => {
    const workspaces = [
        {
            img: '',
            title: 'UTN PWA TN',
            miembros: [],
            id: 1
        },
        {
            img: '',
            title: 'UTN PWA TM',
            miembros: [],
            id: 2
        }, {
            img: '',
            title: 'UTN Fiesta',
            miembros: [],
            id: 3
        }
    ]
    return (
        <div>
            <Link to={'/estados'}>Ir a estados</Link>
            <br/>
            <Link to={'/formularios'}>Ir a formularios</Link>
            <WorkSpaceList workspaces={workspaces} />
        </div>
    )
}

export default HomeScreen