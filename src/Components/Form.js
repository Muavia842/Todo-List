import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setinput, todos, settodos, editTodo, setEditTodo }) => {
  const updateTodo = (tittle, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { tittle, id, completed } : todo
    );
    settodos(newTodo);
    setEditTodo("");
  };

  useEffect(() => {
    if (editTodo) {
      setinput(editTodo.tittle);
    } else {
      setinput("");
    }
  }, [setinput, editTodo]);
  const onInputChange = (event) => {
    setinput(event.target.value);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      settodos([...todos, { id: uuidv4(), tittle: input, completed: false }]);
      setinput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };
  return (
    <form onSubmit={onFormSubmit} className="form">
      <input
        type="text"
        placeholder=" Enter a Todo..."
        className="task-input"
        value={input}
        required
        onChange={onInputChange}
      />
      <button className="button-add" type="submit">
        {editTodo ? "ok" : "add"}
      </button>
    </form>
  );
};

export default Form;
