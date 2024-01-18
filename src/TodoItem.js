import './TodoItem.css'
import React, { useState } from 'react';



function TodoItem({text, episodes, episode}) {
  const [isChecked, setIsChecked] = useState(false);
  const [currentEpisode, setCurrentEpisode] =useState(episode);
  

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
  
  const tachado ={
     color: isChecked ? 'green' : 'gray',
  };
    return (
      <li className='item'>
        <img width="25" height="25" src="https://img.icons8.com/ios-filled/25/000000/menu--v6.png" alt="menu--v6"/>
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

