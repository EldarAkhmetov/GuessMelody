import {applyMiddleware, createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import thunk from 'redux-thunk';
import {compose} from 'recompose';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app.jsx';

import {reducer as gameReducer} from './reducer/game/reducer.js';
import {questionsReducer, questionsOperations} from './reducer/questions/index.js';
import configureAPI from './server/configure-api';

const gameSettings = {
  gameTime: 5,
  errorCount: 3
};

const init = (settings) => {
  const api = configureAPI((...args) => store.dispatch(...args));

  const rootReducer = combineReducers({
    questions: questionsReducer,
    game: gameReducer
  });

  const store = createStore(
      rootReducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
      )
  );

  store.dispatch(questionsOperations.loadQuestions());


  ReactDOM.render(
      <Provider store={store}>
        <App
          gameTime={settings.gameTime}
          errorCount={settings.errorCount}
        />
      </Provider>,
      document.getElementById(`root`)
  );
};

init(gameSettings);
