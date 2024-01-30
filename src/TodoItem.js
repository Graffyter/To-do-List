import './TodoItem.css'
import React, { useState } from 'react';
import editIcon from './images/editar.png';
import deleteIcon from './images/basura2.png';



function TodoItem({text, episodes, episode}) {
  const [isChecked, setIsChecked] = useState(false);
  const [currentEpisode, setCurrentEpisode] =useState(episode);
  const [desplegado, setDesplegado] = useState({});
  const [isNone, setIsNone] = useState(false);
  const [activado, setActivado] = useState(false);
  

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const handleAddEpisodeClick =() =>{
    if(currentEpisode < episodes){
      setCurrentEpisode(prevEpisode => prevEpisode + 1)
      if(currentEpisode + 1 ===episodes){
        setIsChecked(true)
      }      
    }
  }
  const desplegar =()=>{
    setIsNone(!isNone);
    setDesplegado({
      visibility: isNone ? 'hidden':'visible',
    });
    setActivado(!activado);
  }
  
  const tachado ={
     color: isChecked ? 'green' : 'gray',
  };
    return (
      <li className='item'>
        <button className={`buttonMenu ${activado ? 'activado': ''}`} onClick={desplegar}>
          <div></div>
          <div></div>
          <div></div>
        </button>
        
        <div className='menu' style={desplegado}>
          <div className='edit icon'>
            <img alt='edit' src={editIcon}></img>
          </div>
          <div className='delete icon'>
            <img alt='delete' src={deleteIcon}></img>
          </div>
        </div>
        <p className='frase' style={tachado}>{text}</p>
        <div className='episodes'>
          <button id='addEpisode' onClick={handleAddEpisodeClick}>+</button>
          <p className='frase2' style={tachado}>{currentEpisode}/{episodes}</p>
        </div>
        <div className='check'>
            <input type="checkbox"  checked ={isChecked} onChange={handleCheckboxChange}/> 
        </div>
      </li>
    );
  }

  export {TodoItem};

