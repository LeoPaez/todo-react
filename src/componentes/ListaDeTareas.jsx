import React, { useState, useEffect } from "react";
import TareaInput from "./TareaInput";
import Tarea from "./Tarea"
import "../stylesheets/ListaDeTareas.css";
import BotonLimpiar from "./BotonLimpiar";
import { AnimatePresence, Reorder } from "framer-motion";

const ListaDeTareas = () => {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    let data = localStorage.getItem("tareas")
    if (data) {
      setTareas(JSON.parse(data));
    }
  }, [])
  
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas))
  }, [tareas])
  
  const agregarTarea = (tarea) => {
    console.log(tarea);
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
    // if(!setTareas([])) {

    // }
  }

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id)
    setTareas(tareasActualizadas);
  }

  // const ocultarBotonLimpiar = () => {
  //   if(!setTareas([])) {
  //     return console.log("Hola");
  //   }
  // }

  const eliminarLista = () => {
    setTareas([]);
  }

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    })
    setTareas(tareasActualizadas);
  } 

  return (
    <>
      <TareaInput onSubmit={agregarTarea} />
      {/* <div className="tareas-lista-contenedor"> */}
      <Reorder.Group className="tareas-lista-contenedor" axis="y" values={tareas} onReorder={setTareas}>
        <AnimatePresence>
          {/* {
            tareas.map((tarea, index) =>
            <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            eliminarTarea={eliminarTarea}
            completarTarea={completarTarea}
            index={index} />
            )
          } */}
          {tareas.map((tarea, index) => (
            <Reorder.Item key={tarea.id} value={tarea}>
              <Tarea
                key={tarea.id}
                id={tarea.id}
                texto={tarea.texto}
                completada={tarea.completada}
                eliminarTarea={eliminarTarea}
                completarTarea={completarTarea}
                index={index} />
            </Reorder.Item>
            ))}
          <div className="boton-limpiar-contenedor">
            {/* {(tareas.length === 0) ? 
              null : <BotonLimpiar
              eliminarLista={eliminarLista}/>
            } */}
            {(tareas.length !== 0) &&
              <BotonLimpiar
              eliminarLista={eliminarLista}/>
            }
          </div>
        </AnimatePresence>
      </Reorder.Group>
      {/* </div> */}
    </>
  )
}

export default ListaDeTareas;