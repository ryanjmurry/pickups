export const createReducer = (initialState, fnMap) => {
  return (state = initialState, { type, payloar }) => {
    const handler = fnMap[type];

    return handler ? handler(state, payload) : state;
  };
};
