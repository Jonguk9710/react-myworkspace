const initialState = [
  {
    id: 1,
    memo: "React 공부하기",
    comments: [
      { id: 1, content: "커멘트입니다1." },
      { id: 2, content: "커멘트입니다2." },
    ],
  },
  {
    id: 2,
    memo: "Javascript 연습하기",
    comments: [
      { id: 3, content: "커멘트입니다3." },
      { id: 4, content: "커멘트입니다4." },
    ],
  },
];

const todo = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [{ ...action.payload }, ...state];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    case "SAVE_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...action.payload } : todo
      );
    default:
      return state;
  }
};

export default todo;
