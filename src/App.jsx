import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Header from "./components/Header";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  
  console.log("todos", todos);
  return (
    <div className="app-container">
      <Header/>
      <Form 
      inputValue={inputValue} 
      setInputValue={setInputValue}
      todos={todos}
      setTodos = {setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
