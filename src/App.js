import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import './CreateTodoButton.css'

const defaultTodos = [
  { text: "Cortar cebollas", completed: true },
  { text: "Conquistar el mundo", completed: false },
  { text: "Patrullar en la noche", completed: false },
  { text: "ser miserable", completed: true },
];
const completedTodos = defaultTodos.filter(todo =>todo.completed === true)

function App() {
  return (
    <>
    <section className="mainContent">
      <CreateTodoButton />
      <div className="box">
        <TodoCounter completed={completedTodos.length} total={defaultTodos.length} />
        <TodoSearch />
        <TodoList>
          {defaultTodos.map((todo) => (
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
