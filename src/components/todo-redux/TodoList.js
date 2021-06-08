import List from "@material-ui/core/List";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todoList = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_TODOLIST" });
  }, [dispatch]);

  return (
    <div>
      <List style={{ height: "40vh", overflowY: "auto" }}>
        {todoList.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </List>
    </div>
  );
};

export default TodoList;
