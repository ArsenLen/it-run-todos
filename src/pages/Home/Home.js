import { Button, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";

const fetchTodos = async () => {
  return await axios.get("http://localhost:3004/todos");
};

const Home = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos().then(res => setTodos(res.data));
  }, []);

  const handleTodo = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3004/todos", {
        task: todo,
        isCompleted: 0
      });
    } catch (err) {
      console.log(err);
    }
    setTodo("");
    fetchTodos().then(res => setTodos(res.data));
  };

  const handleComplete = async (e, id, task) => {
    e.preventDefault();
    await axios.put(`http://localhost:3004/todos/${id}`, {
      task,
      isCompleted: 1,
    });
    fetchTodos().then(res => setTodos(res.data));
  };
  return (
    <div>
      <form onSubmit={handleTodo}>
        <TextField
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          variant="outlined"
          label="Введите задачу"
          style={{
            marginTop: 10,
          }}
        />
        <Button
          type="submit"
          variant="outlined"
          style={{
            display: "block",
            margin: "auto",
          }}
        >
          Отправить
        </Button>
      </form>
      <ul>
        <h2>Невыполненное</h2>
        {todos
          .filter((todo) => todo.isCompleted == false)
          .map((todo) => {
            return (
              <li>
                {todo.task}
                <Button
                  type="submit"
                  variant="outlined"
                  onClick={e => handleComplete(e, todo.id, todo.task)}
                >
                  Выполнить
                </Button>
              </li>
            );
          })}
      </ul>
      <ul>
        <h2>Выполненное</h2>
        {todos
          .filter((todo) => todo.isCompleted)
          .map((todo) => (
            <li>{todo.task}</li>
          ))}
      </ul>
    </div>
  );
};

export default Home;

// Задание. По нажатию кнопки "Выполнить" переносить задачи
// из "Невыпполненных" в "Выполненные"

// arr.filter()
