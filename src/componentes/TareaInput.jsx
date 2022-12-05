import React, { useState } from "react";
import "../stylesheets/TareaInput.css"
import { v4 as uuidv4 } from "uuid"
import Swal from 'sweetalert2'

const TareaInput = (props) => {

  const [input, setInput] = useState("");

  const manejarCambio = (e) => {
    setInput(e.target.value)
  }

  const manejarEnvio = (e) => {
    e.preventDefault();
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }
    props.onSubmit(tareaNueva)
    e.target.reset()
    setInput("")
  }

  const chequearInput = () => {
    if(input === "") {
      Swal.fire({
        title: 'Por favor ingresa una tarea',
        confirmButtonColor: "#7b2cbf",
      });
    }
  }

  return (
    <form
      className="tarea-formulario input-group"
      onSubmit={manejarEnvio}>
      {/* <input
        className="tarea-input"
        type="text"
        placeholder="Escribe una Tarea"
        name="texto"
        onChange={manejarCambio}
      /> */}
      <div className="inputbox">
        <input
        // required="required"
        type="text"
        onChange={manejarCambio}/>
        <span>Escribe una tarea</span>
        <i></i>
      </div>
      <button className="tarea-boton" onClick={chequearInput}>
        Agregar Tarea
      </button>
    </form>
  )
}

export default TareaInput