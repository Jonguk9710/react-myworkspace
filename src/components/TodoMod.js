import { useRef, useState } from "react";

const TodoMod = () => {
  const [todoList, setTodoList] = useState([
    { memo: "React 공부하기" },
    { memo: "Javascript 연습하기" },
  ]);

  const input = useRef();
  const ul = useRef();

  const add = () => {
    console.log("--add--");

    console.log(input.current.value);

    setTodoList([{ memo: input.current.value }, ...todoList]);
  };

  const remove = (index) => {
    const newTodoList = todoList.filter((todo, idx) => {
      return idx !== index;
    });

    setTodoList(newTodoList);
  };

  const edit = (index) => {
    setTodoList(
      todoList.map((todo, idx) => {
        if (idx === index) {
          todo.isEdit = true;
        }

        return todo;
      })
    );
  };

  const cancel = (index) => {
    setTodoList(
      todoList.map((todo, idx) => {
        if (idx === index) {
          delete todo.isEdit;
        }

        return todo;
      })
    );
  };

  const save = (index) => {
    setTodoList(
      todoList.map((todo, idx) => {
        if (idx === index) {
          const li = ul.current.children[index];
          const editInput = li.querySelector("input");
          todo.memo = editInput.value;
          delete todo.isEdit;
        }
        return todo;
      })
    );
  };

  return (
    <>
      <div>
        <input type="text" placeholder="할 일 ..." ref={input} />
        <button onClick={add}>입력</button>
      </div>
      <div>
        <ul ref={ul}>
          {todoList.map((todo, index) => (
            <li key={index}>
              <button
                onClick={() => {
                  remove(index);
                }}
              >
                삭제
              </button>
              {!todo.isEdit && <span>{todo.memo}</span>}
              {!todo.isEdit && (
                <button
                  onClick={() => {
                    edit(index);
                  }}
                >
                  edit
                </button>
              )}

              {todo.isEdit && (
                <input type="text" defaultValue={todo.memo}></input>
              )}
              {todo.isEdit && (
                <button
                  onClick={() => {
                    save(index);
                  }}
                >
                  save
                </button>
              )}
              {todo.isEdit && (
                <button
                  onClick={() => {
                    cancel(index);
                  }}
                >
                  cancel
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoMod;
