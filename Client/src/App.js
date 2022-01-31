import './App.css';
import { ShowTodo } from './components/ShowTodo';
import { AddTodo } from './components/AddTodo';

function App() {
  return (
      <div>
      <h1 className="todo-heading">TODO APP</h1>
      <AddTodo/>
      <ShowTodo/>
      </div>
  );
}

export default App;
