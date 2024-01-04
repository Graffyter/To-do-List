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
  { text: "Danganronpa", totalEpisodes:12, episode:12 },
];

const actualizadoAnimes = defaultAnimes.map(anime => ({
  ...anime,
  completed: anime.totalEpisodes - anime.episode === 0,
}));

console.log(actualizadoAnimes);

const completedAnimes = actualizadoAnimes.filter(todo =>todo.completed === true)

function App() {
  return (
    <>
    <section className="mainContent">
      <CreateTodoButton />
      <div className="box">
        <TodoCounter completed={completedAnimes.length} total={defaultAnimes.length} />
        <TodoSearch />
        <TodoList>
          {defaultAnimes.map((todo) => (
            <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
            />
          ))}
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
