import React from 'react'
import ListaDeTareas from '../componentes/ListaDeTareas';
import { motion } from "framer-motion";
import Nav from '../componentes/Nav';


const ToDo = () => {
  return (
    <>
      <div className="aplicacion-tareas">
        {/* <Logo /> */}
        <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ duration: 0.4 }} layout className="tareas-lista-principal">
          <h1>Mis tareas</h1>
          <ListaDeTareas />
        </motion.div>
      </div>
    </>
  )
}

export default ToDo