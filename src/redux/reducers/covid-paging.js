const initialState = {
  content: [],
  page: 0,
  size: 10,
  totalElements: 0,
};

const covid = (state = initialState, action) => {
  switch (action.type) {
    case "MODIFY_COVID_SUCCEEDED": {
      const newState = { ...state };

      newState.content = state.content.map((covid) =>
        covid.id === action.payload.id ? { ...action.payload } : covid
      );

      return newState;
    }

    case "FETCH_COVIDLIST_PAGING_SUCCEEDED":
      return {
        content: action.payload.content,
        page: action.payload.number,
        size: action.payload.size,
        totalElements: action.payload.totalElements,
      };

    default:
      return state;
  }
};

export default covid;
