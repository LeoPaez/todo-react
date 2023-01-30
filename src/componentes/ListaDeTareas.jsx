import React, { useEffect, useContext } from "react";
import TareaInput from "./TareaInput";
import Tarea from "./Tarea"
import "../stylesheets/ListaDeTareas.css";
import BotonLimpiar from "./BotonLimpiar";
import { AnimatePresence, Reorder } from "framer-motion";
import Swal from "sweetalert2";
import { TodoContext } from "../contexto/Contexto";


const ListaDeTareas = () => {
  const {tareas, setTareas} = useContext(TodoContext)

  useEffect(() => {
    let data = localStorage.getItem("tareas")
    if (data) {
      setTareas(JSON.parse(data));
    }
  }, [setTareas])
  
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas))
  }, [tareas])

  const isExistingCartProduct = (tarea) => {
    return tareas.find((item) => item.texto === tarea.texto);
  };


  const agregarTarea = (tarea) => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      if (isExistingCartProduct(tarea)){
        Swal.fire({
          title: 'Esa tarea ya existe',
          confirmButtonColor: "#7b2cbf",
        });

        return
      }
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
