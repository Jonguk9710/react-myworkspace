import React, { useState, useRef } from "react";

import TodoList from "./TodoList";

const Todo = () => {
  const classes = useStyles();

  const [todoList, setTodoList] = useState([
    { memo: "React 공부하기" },
    { memo: "Javascript 연습하기" },
  ]);
  const input = useRef();
  const ul = useRef();

  const handleInputchange = (event) => {
    // console.log(event);
    if (event.charCode === 13) {
      handleAdd();
    }
  };

  const handleAdd = () => {
    console.log(input.current);
    setTodoList([{ memo: input.current.value }, ...todoList]);
    input.current.value = "";
  };

  const handleItemRemove = (index) => {
    const arr = todoList;
    const newArr = todoList.filter((todo, idx) => idx !== index);

    console.log(arr[0] === newArr[0]);

    setTodoList(todoList.filter((todo, idx) => idx !== index));
  };

  const handleItemEdit = (index) => {
    setTodoList(
      todoList.map((todo, idx) => {
        if (idx === index) {
          todo.isEdit = true;
        }

        return todo;
      })
    );
  };

  const handleItemCancel = (index) => {
    setTodoList(
      todoList.map((todo, idx) => {
        if (idx === index) {
          delete todo.isEdit;
        }

        return todo;
      })
    );
  };

  const handleItemSave = (index) => {
    setTodoList(
      todoList.map((todo, idx) => {
        if (idx === index) {
          const li = ul.current.children[index];
          const editInput = li.querySelector("input");
          todo.memo = editInput.value;
          delete todo.isEdit;
        }
      })
    );
  };
};
return (
  <TodoList
    inputRef={input}
    ulRef={ul}
    todoList={todoList}
    onAdd={handleAdd}
    onInputChanfe={handleInputChange}
    onItemRemove={handleItemRemove}
    onItemEdit={handleItemEdit}
    onItemCancel={handleItemCancel}
    onItemSave={handleItemSave}
  />
);

export default Todo;
