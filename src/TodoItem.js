import './TodoItem.css'
import React, { useState } from 'react';



function TodoItem({text}) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  
  const tachado ={
     textDecoration: isChecked ? 'line-through' : 'none',
     color: isChecked ? 'gray' : 'black',
  };

    return (
      <li className='item'>
        <div className='check'>
            <input type="checkbox"  checked ={isChecked} onChange={handleCheckboxChange}/> 
        </div>
        <p className='frace' style={tachado}>{text}</p>
        <span className='delete'>
        <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/000000/waste.png" alt="waste"/>
        </span>
      </li>
    );
  }

  export {TodoItem};

