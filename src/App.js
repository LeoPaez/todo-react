import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';
import { motion } from "framer-motion";

function App() {
  return (
    <div className="App">
      <div className="aplicacion-tareas">
        {/* <Logo /> */}
        <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ duration: 0.4 }} layout className="tareas-lista-principal">
          <h1>Mis tareas</h1>
          <ListaDeTareas />
        </motion.div>
      </div>
    </div>
  );
}

export default App;
