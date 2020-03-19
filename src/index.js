import {createStore} from 'redux';
import {Provider} from 'react-redux';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app.jsx';
import questions from './mocks/questions.js';
import {reducer} from './reducer/reducer.js';

const init = (gameQuestions) => {
  const store = createStore(reducer);

  const settings = {
    gameTime: 5,
    errorCount: 3
  };
  ReactDOM.render(
      <Provider store={store}>
        <App
          gameTime={settings.gameTime}
          errorCount={settings.errorCount}
          questions={gameQuestions}
        />
      </Provider>,
      document.getElementById(`root`)
  );
};

init(questions);
