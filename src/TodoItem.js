import './TodoItem.css'
import React, { useState } from 'react';



function TodoItem({text, episodes, episode}) {
  const [isChecked, setIsChecked] = useState(false);
  

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  
  const tachado ={
     color: isChecked ? 'green' : 'gray',
  };

    return (
      <li className='item'>
        <img width="25" height="25" src="https://img.icons8.com/ios-filled/25/000000/menu--v6.png" alt="menu--v6"/>
        <p className='frase' style={tachado}>{text}</p>
        <div className='episodes'>
          <button id='addEpisode' onClick={(event) =>{
          }}>+</button>
          <p className='frase2' style={tachado}>{episode}/{episodes}</p>
        </div>
        <div className='check'>
            <input type="checkbox"  checked ={isChecked} onChange={handleCheckboxChange}/> 
        </div>
      </li>
    );
  }

  export {TodoItem};

