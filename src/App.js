import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import './CreateTodoButton.css'


const defaultAnimes = [
  { text: "Death Note", totalEpisodes:36, episode:36 },
  { text: "naruto shipuden", totalEpisodes:500, episode:300 },
  { text: "Your Name", totalEpisodes:1, episode:0 },
  { text: "Danganronpa", totalEpisodes:12, episode:10 },
];
console.log(defaultAnimes);

const actualizadoAnimes = defaultAnimes.map(anime => ({
  ...anime,
  completed: anime.totalEpisodes - anime.episode === 0,
}));


const completedAnimes = actualizadoAnimes.filter(todo =>todo.completed === true)

function App() {
  const[searchValue, setSearchValue] = React.useState('');
  console.log('estas buscando '+ searchValue);

  return (
    <>
    <section className="mainContent">
      <CreateTodoButton />
      <div className="box">
        <TodoCounter completed={completedAnimes.length} total={defaultAnimes.length}/>
        <TodoSearch 
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
        />
        <TodoList>
          {defaultAnimes.map((animes) => {
            return(
              <TodoItem 
              key={animes.text} 
              text={animes.text}
              episodes={animes.totalEpisodes}
              episode={animes.episode}
              />
            )          
            })}
        </TodoList>
      </div>
      </section>
      <footer className="pie">
        <div className="nameApp"> 
          <div>My Anime List</div>
        </div>
      </footer>
    </>
    
  );
}

export default App;
