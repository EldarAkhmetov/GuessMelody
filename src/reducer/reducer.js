const isGenreQuestionCorrect = (question, answer) => question
  .answers.every((it, ind) => (question.genre === it.genre) === answer[ind]);

const isArtistQuestionCorrect = (question, answer) => question
  .song.artist === answer.toString();

const initialState = {
  step: -1,
  mistakes: 0,
  gameTimeRemaining: 0
};

const ActionCreator = {
  incrementStep: () => {
    return {
      type: `INCREMENT_STEP`,
      payload: 1
    };
  },

  incrementMistakes: (answer, question) => {
    let isAnswerCorrect = false;
    switch (question.type) {
      case `genre`:
        isAnswerCorrect = isGenreQuestionCorrect(question, answer);
        break;
      case `artist`:
        isAnswerCorrect = isArtistQuestionCorrect(question, answer);
        break;
    }
    return {
      type: `INCREMENT_MISTAKES`,
      payload: isAnswerCorrect ? 0 : 1
    };
  },

  setGameTime: (time, timer) => {
    return {
      type: `SET_GAME_TIME`,
      payload: timer.setTimer(time)
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

    case `SET_GAME_TIME`: return {...state, gameTimeRemaining: action.payload};

    case `DECREASE_GAME_TIME`: return {...state, gameTimeRemaining: state.gameTimeRemaining - action.payload};

    case `RESET`: return {...initialState};
  }
  return state;
};

export {
  ActionCreator,
  reducer
};
