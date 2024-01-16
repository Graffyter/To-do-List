import React from 'react';
import './todoSearch.css';

function TodoSearch({searchValue, setSearchValue}) {
  

  return (
    <label>
      <input 
      className='search' 
      placeholder="Anime Name"
      value={searchValue}
      onChange={(event) =>{
        setSearchValue(event.target.value);
      }}
      />
    </label>
    
  )
}

export {TodoSearch};