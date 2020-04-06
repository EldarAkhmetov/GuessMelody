import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import GameHeader from '../game-header/game-header.jsx';

class ArtistQuestionScreen extends PureComponent {
  constructor(props) {
    super(props);
  }

  _answerChangeHandler(evt) {
    const answersForm = evt.currentTarget;
    const userAnswers = new FormData(answersForm).getAll(`answer`);
    this.props.onAnswer(userAnswers);
  }

  render() {
    const {question, renderPlayer} = this.props;
    const {song, answers} = question;

    return (
      <section className="game game--artist">
        <GameHeader />

        <section className="game__screen">
          <h2 className="game__title">Кто исполняет эту песню?</h2>
          <div className="game__track">
            <div className="track">
              {renderPlayer(song, 0)}
            </div>
          </div>

          <form className="game__artist" onChange={(evt) => this._answerChangeHandler(evt)}>
            {answers.map((it, ind) => {
              return (
                <div key={`${it.artist}-${ind}`} className="artist">
                  <input className="artist__input visually-hidden" type="radio" name="answer" value={`${it.artist}`} id={`answer-${ind}`} />
                  <label className="artist__name" htmlFor={`answer-${ind}`}>
                    <img className="artist__picture" src={it.src} alt={it.artist} />
                    {it.artist}
                  </label>
                </div>
              );
            })}
          </form>
        </section>
      </section>
    );
  }
}

ArtistQuestionScreen.propTypes = {
  question: PropTypes.shape({
    type: PropTypes.string,
    song: PropTypes.object,
    answers: PropTypes.array,
  }),
  onAnswer: PropTypes.func.isRequired,
  renderPlayer: PropTypes.func
};

export default ArtistQuestionScreen;
