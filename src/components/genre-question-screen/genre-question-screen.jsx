import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import GameHeader from '../game-header/game-header.jsx';

class GenreQuestionScreen extends PureComponent {
  constructor(props) {
    super(props);

    const {question} = this.props;
    const {answers} = question;

    this.state = {
      userAnswer: new Array(answers.length).fill(false)
    };

  }

  _answerSubmitHandler(evt) {
    evt.preventDefault();
    const {onAnswer} = this.props;
    const {userAnswer} = this.state;

    onAnswer(userAnswer);
  }

  render() {
    const {question, renderPlayer} = this.props;
    const {answers, genre} = question;
    return (
      <section className="game game--genre">
        <GameHeader />

        <section className="game__screen">
          <h2 className="game__title">Выберите {genre} треки</h2>
          <form className="game__tracks" onSubmit={(evt) => this._answerSubmitHandler(evt)}>
            {answers.map((it, ind) => {
              return (
                <div key={`track-${ind}-${it.genre}`} className="track">
                  {renderPlayer(it, ind)}
                  <div className="game__answer">
                    <input
                      className="game__input visually-hidden"
                      type="checkbox" name="answer"
                      value={it.genre}
                      id={`answer-${ind}`}
                      onChange={() => {
                        const userAnswer = [...this.state.userAnswer];
                        userAnswer[ind] = !userAnswer[ind];
                        this.setState({userAnswer});
                      }}
                    />
                    <label className="game__check" htmlFor={`answer-${ind}`}>Отметить</label>
                  </div>
                </div>
              );
            })}

            <button className="game__submit button" type="submit">Ответить</button>
          </form>
        </section>
      </section>
    );
  }
}

GenreQuestionScreen.propTypes = {
  question: PropTypes.shape({
    type: PropTypes.string,
    genre: PropTypes.string,
    answers: PropTypes.array,
  }),
  onAnswer: PropTypes.func.isRequired,
  renderPlayer: PropTypes.func
};

export default GenreQuestionScreen;
