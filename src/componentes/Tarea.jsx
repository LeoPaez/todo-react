import React from "react";
import "../stylesheets/Tarea.css"
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  hidden: {
    y: -20
  },
  visible: ({ delay, opacity }) => ({
    y: 0,
    transition: {
      delay,
      opacity,
      duration: 0.5
    }
  }),
  exit: {
    opacity: 0,
    y: -20
  }
}

const Tarea = ({ id, texto, completada, completarTarea, eliminarTarea, index }) => {
  return (
    <motion.div initial="hidden" animate="visible" exit="exit" custom={{ delay: (index) * 0.2 }} layoutId={id} variants={variants} className={completada ? "tarea-contenedor completada" : "tarea-contenedor"}>
      <div
        className="tarea-texto"
        onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <motion.div
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.1 }}
        className="tarea-contenedor-iconos"
        onClick={() => eliminarTarea(id)}>
        <AiOutlineCloseCircle className="tarea-icono" />
      </motion.div>
    </motion.div>
  )
}

export default Tarea;