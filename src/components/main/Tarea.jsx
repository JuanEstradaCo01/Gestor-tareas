import React from "react"
import "../../styleComponents/main.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function Tarea({ texto, tareaCompletada, id, completarTarea, eliminarTarea, volver }) {
   
    return (
        <div className={tareaCompletada ? "tarea tareaCompletada" : "tarea"}>
            <div className="contenedorTarea" >
                <div className="texto" onClick={() => completarTarea(id)}>
                    {texto}
                </div>
                <div className="contenedorEliminarResolver">
                    {/*Icono de completada*/}
                    <div className= "tareaResuelta" onClick={() => completarTarea(id)}>
                        <FontAwesomeIcon icon={faCheck} />
                    </div>
                    
                    {/*Icono para volver la tarea no resuelta*/}
                    <div className="tareaResuelta" onClick={() => volver(id)}>
                        <FontAwesomeIcon icon={faXmark} />
                    </div>

                    {/*Icono de eliminar*/}
                    <div className="eliminarTarea" onClick={() => eliminarTarea(id)}>
                        <FontAwesomeIcon icon={faTrash} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tarea;