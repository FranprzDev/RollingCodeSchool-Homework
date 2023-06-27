import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Importaciones de rutas

import Nav from './componets/Nav.jsx';
import Home from './componets/Home.jsx';
import Footer from './componets/Footer.jsx';
import Form from './componets/Form.jsx';
// Importaciones de bootstrap 

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function App() {
  return (
    <>
        <Nav />
        <BrowserRouter>
        
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/form" element={<Form/>} />
        </Routes>
        </BrowserRouter>
        <Footer />
    </>
  )
}

export default App