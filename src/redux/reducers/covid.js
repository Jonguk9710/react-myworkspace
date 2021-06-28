const initialState = [];

const covid = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COVID_SUCCEEDED":
      return [{ ...action.payload }, ...state];
    case "REMOVE_COVID_SUCCEEDED":
      return state.filter((covid) => covid.id !== action.payload);
    case "MODIFY_COVID_SUCCEEDED":
      return state.map((covid) =>
        covid.id === action.payload.id ? { ...action.payload } : covid
      );
    case "FETCH_COVIDLIST_SUCCEEDED":
      return [...action.payload];
    default:
      return state;
  }
};

export default covid;
