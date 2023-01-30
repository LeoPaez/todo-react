import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pokemon from "./pages/Pokemon"
import ToDo from './pages/ToDo';
import Nav from './componentes/Nav';
import Home from "./pages/Home";
import React from 'react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Nav /> }>
            <Route path='/' element={ <ToDo /> }/>
            <Route path='/pokemon' element={ <Pokemon /> }/>
            <Route path='/home' element={ <Home /> }/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
