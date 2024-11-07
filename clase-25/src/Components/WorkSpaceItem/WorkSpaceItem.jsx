import React from 'react'
import'./WorkSpaceItem.css'

const WorkSpaceItem = ({img, title, miembros, id}) => {
    return(
        <div className="workspace">
            
        <img src={img}/>
        <h2>{title}</h2>
        <span>Hay {miembros.length} miembros</span>
        </div>
    )
}

export default WorkSpaceItem