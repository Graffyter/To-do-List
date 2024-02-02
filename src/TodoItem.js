import './TodoItem.css'
import React, { useState } from 'react';
import editIcon from './images/editar.png';
import deleteIcon from './images/basura2.png';


function TodoItem(props) { 
  const [currentEpisode, setCurrentEpisode] =useState(props.episode);
  const [isChecked, setIsChecked] = useState(false);
  const [desplegado, setDesplegado] = useState({});
  const [isNone, setIsNone] = useState(false);
  const [activado, setActivado] = useState(false);

React.useEffect(()=>{
  if(isChecked === false){
    props.onUncomplete && props.onUncomplete();
  }else if(isChecked === true){
    props.onComplete && props.onComplete();
  }
},[isChecked])

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); 
  };
  const handleAddEpisodeClick =() =>{

    if(currentEpisode < props.episodes){
      setCurrentEpisode(prevEpisode => prevEpisode + 1)     
    }
  }

  React.useEffect( () => {
    if(currentEpisode  === props.episodes){
      setIsChecked(true);
    }
  },[currentEpisode]
  )


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
          <div className='delete icon' onClick={props.onDelete}>
            <img alt='delete' src={deleteIcon}></img>
          </div>
        </div>
        <p className='frase' style={tachado}>{props.text}</p>
        <div className='episodes'>
          <button id='addEpisode' onClick={handleAddEpisodeClick}>+</button>
          <p className='frase2' style={tachado}>{currentEpisode}/{props.episodes}</p>
        </div>
        <div className='check'>
            <input type="checkbox"  checked ={isChecked} onChange={handleCheckboxChange}/> 
        </div>
      </li>
    );
  }

  export {TodoItem};

