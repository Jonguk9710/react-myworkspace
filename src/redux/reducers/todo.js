const initialState = [];

const todo = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO_SUCCEEDED":
      return [{ ...action.payload }, ...state];
    case "REMOVE_TODO_SUCCEEDED":
      return state.filter((todo) => todo.id !== action.payload);
    case "MODIFY_TODO_SUCCEEDED":
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...action.payload } : todo
      );
    case "FETCH_TODOLIST_SUCCEEDED":
      return [...action.payload];

    default:
      return state;
  }
};

export default todo;
