const initialState = {
  auth: {
    token: "",
    userName: "",
    data: [],
  },
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "token":
      return { ...state, token: payload };

    case "name":
      return { ...state, userName: payload };

    case "add_lessons":
      return { ...state, data: payload };
    default:
      return state;
  }
};
