import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen.jsx';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen.jsx';

class App extends PureComponent {
  static getScreen(question, props, onUserAnswer) {
    const {gameTime, errorCount, questions} = props;
    if (question === -1) {
      return <WelcomeScreen
        time={gameTime}
        errorCount={errorCount}
        questions={questions}
        onWelcomeButtonClick={onUserAnswer}
      />;
    }

    const currentQuestion = questions[question];

    switch (currentQuestion.type) {
      case `genre`: return <GenreQuestionScreen
        question={currentQuestion}
        onAnswer={onUserAnswer}
      />;

      case `artist`: return <ArtistQuestionScreen
        question={currentQuestion}
        onAnswer={onUserAnswer}
      />;

    }

    return null;

  }

  constructor(props) {
    super(props);

    this.state = {
      question: -1,
      answers: new Array(this.props.questions.length).fill(`unknown`),
    };

    this._userAnswerClickHandler = this._userAnswerClickHandler.bind(this);
  }


  render() {
    const {question} = this.state;
    return App.getScreen(question, this.props, this._userAnswerClickHandler);
  }

  _userAnswerClickHandler() {
    const {questions} = this.props;

    this.setState((prevState) => {
      const nextIndex = prevState.question + 1;
      const isEnd = nextIndex >= questions.length;
      return {
        ...prevState,
        question: !isEnd ? nextIndex : -1,
      };
    });

  }

}

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object),
};

export default App;
