import './CreateTodoButton.css'
import React, { useState } from 'react';


function CreateTodoButton({text}) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <article className="create box">
      <h1 className='pad'>New Anime</h1>
      <input placeholder='Anime name' />
      <div>In broadcast</div>
      <input type='checkbox' checked ={isChecked} onChange={handleCheckboxChange}/>
      <input placeholder='Number of Episodes'></input>
      
      <button className='pad'>Add</button>
    </article>
    
  )
}

export {CreateTodoButton};