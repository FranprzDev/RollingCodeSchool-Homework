import React, { useState, useEffect } from 'react';
import Card from './Component/Card'

function App() {
  const [lista, setLista] = useState(() => {
    const almacenadoLocal = localStorage.getItem('tasks');
    const almacenadoLocalParseado = JSON.parse(almacenadoLocal)
    
    return almacenadoLocalParseado || ""
  });
  const [task, setTask] = useState('');
  
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(lista));
  }, [lista]);


  const buttonStyle = {
    background: 'linear-gradient(to bottom, #be99e2, #8a36bd)',
    borderRadius: '20px',
    color: 'white',
    fontSize: '20px',
    padding: '10px 20px',
  };

  const inputStyle = {
    width: '50%',
    fontSize: '24px',
    padding: '10px',
  };

  const handleChangeForm = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLista(prevLista => [task, ...prevLista]);
    setTask('');
  };

  const handleCleanForm = () => {
    setLista([])
  }

  const handleDelete = (index) => {
    // console.log(lista)
    // console.log(index)
    const updatedLista = [...lista];
    updatedLista.splice(index, 1);
    setLista(updatedLista);
    // console.log(lista)
  }

  return (
    <div className="container">
      <h1 className="animated-text text-center fs-2 mb-3" style={buttonStyle}>
        <span className="typed-text">
          Lista de Tareas
        </span>
        <span className="cursor"></span>
      </h1>
      <form onSubmit={handleSubmit} className="d-flex justify-content-center mt-3">
        <input
          type="text"
          value={task}
          onChange={handleChangeForm}
          required
          className="rounded-pill"
          style={inputStyle}
        />
        <button style={buttonStyle} className="ms-2"> Añadir Tarea </button>
      </form>

      <div className="text-center my-3">
        <button className="ms-2 py-2 px-3 btn-danger rounded-pill text-light bg-danger"
          onClick={handleCleanForm}> 
          Borrar Toda la Lista 
        </button>
      </div>

      {lista.map((elemento, index) => (
        <Card key={index} texto={elemento} onDelete={() => handleDelete(index)} />
      ))}

    </div>
  );
}

export default App;