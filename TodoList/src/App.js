import './App.css';
import { useState } from 'react';
import Template from "./Template";
import TodoList from "./TodoList";
import {MdAddCircle} from 'react-icons/md';
import TodoInsert from './TodoInsert';

let nextId = 1;

function App() {

  const [insertToggle, SetInsertToggle] = useState(false);

  const [todos, SetTodos] = useState([]);

  const [selectTodo, SetSelectTodo] = useState(null);

  const onInsertToggle = () => {
    if(selectTodo){
      SetSelectTodo(null);
    }
    SetInsertToggle(prev => !prev);
  };

  const onUpdate = (id, text) => {
    onInsertToggle();
    SetTodos(todos => todos.map(todo => todo.id === id ? {...todo, text} : todo));
  };
  
  const onInsertTodo = text => {
    if (text === "") {
      return alert("할 일을 입력해주세요.");
    } else {
      const todo = {
        id: nextId,
        text,
        checked: false
      };
      SetTodos(todos => todos.concat(todo));
      nextId++;
    }
  };

  const onCheckToggle = (id) => {
    SetTodos(todos => todos.map(todo => (todo.id === id ? {...todo, checked: !todo.checked} : todo)))
  };
  
  const onChangeSelectedTodo = (todo) => {
    SetSelectTodo(todo);
  };

  const onRemove = (id) => {
    onInsertToggle();
    SetTodos(todos => todos.filter(todo => todo.id !== id));
  };

  return(
    <div>
      <Template
      todoLength = {todos.length}>
        <TodoList
        todos = {todos}
        onCheckToggle = {onCheckToggle}
        onInsertToggle = {onInsertToggle}
        onChangeSelectedTodo = {onChangeSelectedTodo}
        />
        <div
        className = "AddTodoBtn"
        onClick={onInsertToggle}>
          <MdAddCircle
          />
          </div>
        {insertToggle &&
        <TodoInsert
        onInsertToggle = {onInsertToggle}
        onInsertTodo = {onInsertTodo}
        selectTodo = {selectTodo}
        onRemove = {onRemove}
        onUpdate = {onUpdate}
        />}
      </Template>
    </div>
  )
}

export default App;
