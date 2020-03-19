const initialState = {
  step: -1,
  mistakes: 0
};

const ActionCreator = {
  incrementStep: () => {
    return {
      type: `INCREMENT_STEP`,
      payload: 1
    };
  },

  resetGame: () => ({
    type: `RESET`
  }),

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `INCREMENT_STEP`: return {...state, step: state.step + action.payload};

    case `INCREMENT_MISTAKES`: return {...state, mistakes: state.mistakes + action.payload};

    case `RESET`: return {...initialState};
  }
  return state;
};

export {
  ActionCreator,
  reducer
};
