import './todoSearch.css'

function TodoSearch() {
  return (
    <label>
      <input 
      className='search' 
      placeholder="Anime Name"
      onChange={(event) =>{
        console.log('escribiste en el todoSearch');
        console.log(event);
        console.log(event.target.value);
      }}
      />
    </label>
    
  )
}

export {TodoSearch};