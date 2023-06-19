import React from "react";
import { Scrollbars } from "react-custom-scrollbars";

const TodoList = ({ todos, settodos, setEditTodo }) => {
  const HandleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  const HandleComplete = (todo) => {
    settodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        // console.log(...item)
        return item;
      })
    );
  };

  const handleDelete = ({ id }) => {
    settodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="muavia-haidri">
      <Scrollbars>
        {todos.map((todo) => {
          return (
            <li className="list-item" key={todo.id}>
              <input
                type="text"
                value={todo.tittle}
                className={`list ${todo.completed ? "complete" : ""}`}
                onChange={(event) => event.preventDefault()}
              />
              <div className="button-main">
                <button
                  className="button-complete task-button"
                  onClick={() => HandleComplete(todo)}
                >
                  <i className="fa fa-check-circle"></i>
                </button>
                <button
                  className="button-edit task-button"
                  onClick={() => HandleEdit(todo)}
                >
                  <i className="fa fa-edit"></i>
                </button>
                <button
                  className="button-delete task-button"
                  onClick={() => handleDelete(todo)}
                >
                  <i className="fa fa-trash"></i>
                </button>
              </div>
            </li>
          );
        })}
      </Scrollbars>
    </div>
  );
};

export default TodoList;
