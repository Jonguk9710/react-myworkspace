import { useRef, useState } from "react";

const TodoRemove = () => {
  const [todoList, setTodoList] = useState([
    { memo: "React 공부하기" },
    { memo: "Javascript 연습하기" },
  ]);

  const input = useRef();

  const add = () => {
    console.log("--add--");

    console.log(input.current.value);

    setTodoList([{ memo: input.current.value }, ...todoList]);
  };

  input.current.value = "";

  const remove = (index) => {
    const newTodoList = todoList.filter((todo, idx) => {
      return idx !== index;
    });

    setTodoList(newTodoList);
  };

  return (
    <>
      <div>
        <input type="text" placeholder="할 일 ..." ref={input} />
        <button onClick={add}>입력</button>
      </div>
      <div>
        <ul>
          {todoList.map((todo, index) => (
            <li key={index}>
              <button
                onClick={() => {
                  remove(index);
                }}
              >
                삭제
              </button>
              {todo.memo}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoRemove;
