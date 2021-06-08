const initialState = [];

const contact = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return [{ ...action.payload }, ...state];
    case "REMOVE_CONTACT":
      return state.filter((contact) => contact.id !== action.payload);
    case "SAVE_CONTACT":
      return state.map((contact) =>
        contact.id === action.payload.id ? { ...action.payload } : contact
      );
    default:
      return state;
  }
};

export default contact;
