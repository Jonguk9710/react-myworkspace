import List from "@material-ui/core/List";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";

import TodoPagination from "./TodoPagination";

const TodoList = () => {
  const data = useSelector((state) => state.todo);
  console.log("-- todo state in TodoList Component --");
  console.log(data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_TODOLIST_PAGING" });
  }, [dispatch]);

  return (
    <div>
      <List style={{ height: "40vh", overflowY: "auto" }}>
        {data.content.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </List>
      <TodoPagination
        totalElements={data.totalElements}
        page={data.page}
        size={data.size}
      />
    </div>
  );
};

export default TodoList;
