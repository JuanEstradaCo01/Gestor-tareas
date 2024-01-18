import React, { useState } from "react"
import "../../styleComponents/main.css"
import Tarea from "./Tarea"

function Gestor() {

    const [tareas, setTareas] = useState([]);

    const addTarea = (nuevaTarea) => {
        //Verifico y quito espacios innecesarios que se hayan ingresado usando .trim()
        if (nuevaTarea.texto.trim()) {
            nuevaTarea.texto = nuevaTarea.texto.trim()
            nuevaTarea.key = nuevaTarea.id
            //Uso Spread operator para agregar la tarea nueva al principio del array
            const actualizarTareas = [nuevaTarea, ...tareas]
            setTareas(actualizarTareas)
        }
    }

    //Manipular texto al agregar tarea (FORM):
    const [tarea, setTarea] = useState("")

    const manejarCambio = (e) => {
        setTarea(e.target.value)
    }

    const enviarTarea = (e) => {
        e.preventDefault()
        document.getElementById("formAgregar").reset()
        
        const nuevaTarea = {
            id: tareas.length + 1,
            texto: tarea,
            completada: false
        }
        addTarea(nuevaTarea)
    }

    const tareaCompletada = (id) => {
        const actualizar = tareas.map(item => {
            if (item.id === id) {
                item.completada = true
            }
            return item;
        })
        setTareas(actualizar)
    }

    const eliminarTarea = (id) => {
        const actualizar = tareas.filter(item => item.id !== id);
        setTareas(actualizar);
    }

    const volver = (id) => {
        const actualizar = tareas.map(item => {
            if ((item.id === id)) {
                item.completada = false
            }
            return item;
        })
        setTareas(actualizar)
    }

    return (
        <div className="contenedorPrincipal">
            <div className="contenedorInput">
                <h2 className="h2agregarTarea">Agregar una tarea:</h2>
                <form id="formAgregar">
                    <input className="inputAgregarTarea" type="text" placeholder="Agrega una tarea" name="texto" onChange={manejarCambio} />
                    <button className="enviar" type="submit" onClick={enviarTarea}>Agregar</button>
                </form>
            </div>

            <div className="contenedorTareas">
                <h2 className="h2tareasPendientes">Tareas Pendientes:</h2>
                <div className="tareas">
                    {
                        //Creo un componente para iterar las tareas en el array usando .map()
                        tareas.map((tarea) =>
                            <Tarea
                                key={tarea.id}
                                id={tarea.id}
                                texto={tarea.texto}
                                completarTarea={tareaCompletada}
                                eliminarTarea={eliminarTarea}
                                volver={volver}
                                tareaCompletada= {tarea.completada}  
                            />
                        )
                    }
                </div>
            </div>
        </div>

    )
};

export default Gestor;