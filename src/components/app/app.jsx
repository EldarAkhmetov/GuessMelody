import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import WinScreen from '../win-screen/win-screen.jsx';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen.jsx';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen.jsx';
import Timer from '../../utils/timer/timer.js';

import {ActionCreator} from '../../reducer/reducer.js';

class App extends PureComponent {

  _getScreen() {
    const {gameTime, errorCount, questions, onWelcomeScreenClick, onUserAnswer, step: question} = this.props;
    const maxQuestions = questions.length;

    const onTick = () => {
      console.log(timer._timeRemaining);
    };

    const timer = new Timer(10000, 1000, onTick);
    timer.start();
    console.log(`timer`);

    if (question === -1) {
      return <WelcomeScreen
        time={gameTime}
        errorCount={errorCount}
        questions={questions}
        onWelcomeButtonClick={() => onWelcomeScreenClick()}
      />;
    }

    if (question >= maxQuestions) {
      return (
        <WinScreen />
      );
    }

    const currentQuestion = questions[question];

    switch (currentQuestion.type) {
      case `genre`: return <GenreQuestionScreen
        question={currentQuestion}
        onAnswer={(answer) => onUserAnswer(answer, currentQuestion)}
      />;

      case `artist`: return <ArtistQuestionScreen
        question={currentQuestion}
        onAnswer={(answer) => onUserAnswer(answer, currentQuestion)}
      />;

    }

    return null;

  }

  render() {
    return this._getScreen();
  }

}

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object),
  step: PropTypes.number,
  onUserAnswer: PropTypes.func,
  onWelcomeScreenClick: PropTypes.func,
  onGameReset: PropTypes.func
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  step: state.step,
  mistakes: state.mistakes
});

const mapDispatchToProps = (dispatch) => ({
  onWelcomeScreenClick: () => dispatch(ActionCreator.incrementStep()),
  onUserAnswer: (answer, currentQuestion) => {
    dispatch(ActionCreator.incrementStep());
    dispatch(ActionCreator.incrementMistakes(answer, currentQuestion));
  },
  onGameReset: () => dispatch(ActionCreator.resetGame())
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
