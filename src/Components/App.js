import { useState, useEffect } from "react";
import Form from "./Form";
import Header from "./Header";
import "./todo.css";
import TodoList from "./TodoList";
// import Todo from './Components/TodoList-App/Todo';

const AppTodo = () => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setinput] = useState();
  const [todos, settodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setinput={setinput}
            todos={todos}
            settodos={settodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div className="hai">
          <TodoList
            todos={todos}
            settodos={settodos}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  );
};

export default AppTodo;
