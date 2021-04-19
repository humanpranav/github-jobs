const initial_state = {
  switch: false,
  counter: 0,
};
const themereducer = (state = initial_state, action) => {
  switch (action.type) {
    case "changeswitch": {
      return {
        ...state,

        switch: action.payload,
      };
    }

    default:
      return state;
  }
};

export default themereducer;
