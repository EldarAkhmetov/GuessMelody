import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import WinScreen from '../win-screen/win-screen.jsx';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen.jsx';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen.jsx';
import Timer from '../../utils/timer/timer.js';

import {ActionCreator} from '../../reducer/reducer.js';

import withActivePlayer from '../../hocs/with-active-player/with-active-player.js';

const GenreQuestionScreenWrapped = withActivePlayer(GenreQuestionScreen);
const ArtistQuestionScreenWrapped = withActivePlayer(ArtistQuestionScreen);

const MILLISECONDS_IN_MINUTE = 60 * 1000;
const MILLISECONDS_IN_SECOND = 1000;

class App extends PureComponent {

  _getScreen() {
    const {gameTime, errorCount, questions, onWelcomeScreenClick, onUserAnswer, step: question} = this.props;
    const maxQuestions = questions.length;

    const gameTimeframe = gameTime * MILLISECONDS_IN_MINUTE;

    if (question === -1) {
      return <WelcomeScreen
        time={gameTime}
        errorCount={errorCount}
        questions={questions}
        onWelcomeButtonClick={() => onWelcomeScreenClick(gameTimeframe)}
      />;
    }

    if (question >= maxQuestions) {
      return (
        <WinScreen />
      );
    }

    const currentQuestion = questions[question];

    switch (currentQuestion.type) {
      case `genre`: return <GenreQuestionScreenWrapped
        question={currentQuestion}
        onAnswer={(answer) => onUserAnswer(answer, currentQuestion)}
      />;

      case `artist`: return <ArtistQuestionScreenWrapped
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
  gameTimeRemaining: PropTypes.number
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  step: state.step,
  mistakes: state.mistakes,
  gameTimeRemaining: state.gameTimeRemaining
});

const mapDispatchToProps = (dispatch) => {
  const onTick = (timeRemaining, timeTick) => {
    dispatch(ActionCreator.decreaseGameTime(timeTick, timeRemaining));
  };
  const timer = new Timer(0, MILLISECONDS_IN_SECOND, onTick);

  return {
    onWelcomeScreenClick: (gameTimeframe) => {
      dispatch(ActionCreator.incrementStep());
      dispatch(ActionCreator.setGameTime(gameTimeframe, timer));
    },
    onUserAnswer: (answer, currentQuestion) => {
      dispatch(ActionCreator.incrementStep());
      dispatch(ActionCreator.incrementMistakes(answer, currentQuestion));
    }
  };
};

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
