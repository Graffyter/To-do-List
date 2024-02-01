import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import './CreateTodoButton.css'


const defaultAnimes = [
  { text: "Death Note", totalEpisodes:36, episode:30, completed:false},
  { text: "naruto shipuden", totalEpisodes:499, episode:500, completed:false },
  { text: "Your Name", totalEpisodes:1, episode:0, completed:false },
  { text: "Danganronpa", totalEpisodes:11, episode:12, completed:false },
  { text: "High School of the Dead", totalEpisodes:12, episode:8, completed:false },
];

function App() {
  const [anime, setAnime] = React.useState(defaultAnimes);
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

    const CompleteAnime = (text)=>{
      const newAnimes = [...anime];
      const animeIndex = newAnimes.findIndex(
        (anime) => anime.text == text
      )
      newAnimes[animeIndex].completed = true;
      setAnime(newAnimes)
    }
    const UncompleteAnime = (text)=>{
      const newAnimes = [...anime];
      const animeIndex = newAnimes.findIndex(
        (anime) => anime.text == text
      )
      newAnimes[animeIndex].completed = true;
      setAnime(newAnimes)
    }

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
              onComplete={() => CompleteAnime(animes.text)}
              onUncomplete={() => UncompleteAnime(animes.text)}
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
