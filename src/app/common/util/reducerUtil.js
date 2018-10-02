// redux documentation on reducing boilerplate code
export const createReducer = (initialState, lookupMap) => {
  return (state = initialState, { type, payload }) => {
    const handler = lookupMap[type];

    return handler ? handler(state, payload) : state;
  };
};
