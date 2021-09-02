const initialState = {
  title: "",
  items: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === "TITLE") {
    return {
      items: action.items,
      title: action.title,
    };
  }
  return state;
};

export default reducer;
