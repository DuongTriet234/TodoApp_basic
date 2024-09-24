import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function TodoList({ todos, setTodos }) {
  const handleChangeCompleted = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleDeleteTodos = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {todos.map((todo) => {
        const { id, title, completed } = todo;
        return (
          <div key={id} className={`todo-item ${completed ? "completed" : ""}`}>
            <p>{title}</p>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <input
                type="checkbox"
                checked={completed}
                onChange={() => handleChangeCompleted(id)}
              />
              <button className="delete" onClick={() => handleDeleteTodos(id)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
