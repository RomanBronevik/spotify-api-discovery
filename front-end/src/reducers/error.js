const error = (state = [], action) => {
  switch (action.type) {
    case "FETCH_ERROR":
      return [...state, action.error];

    default:
      return state;
  }
};

export default error;
