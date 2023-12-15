import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

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

      <CreateTodoButton />
    </>
  );
}

export default App;
