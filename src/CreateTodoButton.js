import './CreateTodoButton.css'
import React, { useState } from 'react';


function CreateTodoButton({text}) {
  const [inputDeshabilitado, setInputDeshabilitado] = useState(false);

  const manejarCheckboxChange = () => {
    // Cambiar el estado para habilitar o deshabilitar el input
    setInputDeshabilitado(!inputDeshabilitado);
  };
 
  return (
    <article className="create">
      <h1>New Anime</h1>
      <input className='text' placeholder='Anime name' />
      <div>In broadcast</div>

    {/* checkbox para saber si el Anime esta en emision o no */}
      <label className='switch'>
        <input id='Cast' type='checkbox' onChange={manejarCheckboxChange}
          checked={inputDeshabilitado}/>
        <span className='slider'></span>
      </label>

      <input id='Episodes' className='text' placeholder='Number of Episodes' disabled={inputDeshabilitado} ></input>   
      <button className='pad'>Add</button>
    </article>
    
  )
}

export {CreateTodoButton};