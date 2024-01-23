import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import './CreateTodoButton.css'


const defaultAnimes = [
  { text: "Death Note", totalEpisodes:36, episode:30,},
  { text: "naruto shipuden", totalEpisodes:500, episode:500 },
  { text: "Your Name", totalEpisodes:1, episode:0 },
  { text: "Danganronpa", totalEpisodes:12, episode:12 },
  { text: "High School of the Dead", totalEpisodes:12, episode:8 },
];

const actualizadoAnimes = defaultAnimes.map(anime => ({
  ...anime,
  completed: anime.totalEpisodes - anime.episode === 0,
}));


function App() {
  const [anime, setAnime] = React.useState(actualizadoAnimes);
  const[searchValue, setSearchValue] = React.useState('');

  const completedAnimes = anime.filter(anime => 
    anime.completed === true)

  const searchedAnimes = defaultAnimes.filter(
    (animes) => {
      const animesText = animes.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return animesText.includes(searchText);
    }
    )

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
          {searchedAnimes.map((animes) => {
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
