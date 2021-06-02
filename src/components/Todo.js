import { useRef, useState } from "react";

const Todo = () => {
  // 화면에 먼가 표시해야함 -> props or state, 내부에서 쓸거야 state
  const [todoList, setTodoList] = useState([
    { memo: "React 공부하기" },
    { memo: "Javascript 연습하기" },
  ]);

  const input = useRef();

  const add = () => {
    console.log("--add--");
    // 입력박스의 값을 가져오고
    console.log(input.current.value);
    //todoList.push({}) // 배열 뒤에 넣기
    //todoList.unshift({}) // 배열 앞에 넣기

    // state 변수는 직접적으로 변경하면 안 됨.
    // state 변수를 변경할 수 있는 방법은 state 변경 함수만 사용해야함.
    // setTodoList(새로운배열)
    setTodoList([{ memo: input.current.value }, ...todoList]);
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
            <li key={index}>{todo.memo}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todo;
