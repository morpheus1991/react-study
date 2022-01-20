export function numberReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + action.payload };
    case "DECREMENT":
      return { value: state.value - 2 };
    default:
      return state;
  }
}
