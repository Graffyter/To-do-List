import './CreateTodoButton.css'
import React, { useState } from 'react';


function CreateTodoButton({text}) {
  const [inputDeshabilitado, setInputDeshabilitado] = useState(false);

  const manejarCheckboxChange = () => {
    // Cambiar el estado para habilitar o deshabilitar el input
    setInputDeshabilitado(!inputDeshabilitado);
  };

  const tachado2 ={
    textDecoration: inputDeshabilitado ? 'line-through' : 'none',
 };
 
  return (
    <article className="create">
      <h1>New Anime</h1>
      <div className='inputGroup'>
        <input className='text' required type='text' id='animeName'/>
        <label className='label' for='animeName'>Anime Name</label>
      </div>
      
      <div>In broadcast</div>

    {/* checkbox para saber si el Anime esta en emision o no */}
      <label className='switch'>
        <input id='Cast' type='checkbox' onChange={manejarCheckboxChange}
          checked={inputDeshabilitado}/>
        <span className='slider'></span>
      </label>
<div className='inputGroup'>
<input id='Episodes' className='text' style={tachado2} disabled={inputDeshabilitado} ></input> 
<label className='label' for='animeName'>Number of Episodes</label>
</div>
        
      <button className='pad' 
      onClick={
        (event) => {
          console.log('añadiste un nuevo anime');
          console.log(event);
          console.log(event.target);
        } }>Add</button>
    </article>
    
  )
}

export {CreateTodoButton};