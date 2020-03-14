import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import GameHeader from '../game-header/game-header.jsx';
import AudioPlayer from '../audio-player/audio-player.jsx';

class GenreQuestionScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      audioPlayerID: -1
    };

  }

  _answerSubmitHandler(evt) {
    evt.preventDefault();
    const {onAnswer} = this.props;

    const answersForm = evt.currentTarget;
    const userAnswers = new FormData(answersForm).getAll(`answer`);
    onAnswer(userAnswers);
  }

  _playButtonClickHandler(audioPlayerID) {
    this.setState((prevState) => ({
      audioPlayerID: prevState.audioPlayerID === audioPlayerID ? -1 : audioPlayerID
    }));
  }

  render() {
    const {audioPlayerID} = this.state;
    const {question} = this.props;
    const {answers, genre} = question;
    return (
      <section className="game game--genre">
        <GameHeader />

        <section className="game__screen">
          <h2 className="game__title">Выберите {genre} треки</h2>
          <form className="game__tracks" onSubmit={(evt) => this._answerSubmitHandler(evt)}>
            {answers.map((it, ind) => {
              return (
                <div key={`track-${ind}-${it.id}`} className="track">
                  <AudioPlayer
                    src={it.src}
                    isPlaying={ind === audioPlayerID}
                    onPlayButtonClick={() => this._playButtonClickHandler(ind)}
                  />
                  <div className="game__answer">
                    <input className="game__input visually-hidden" type="checkbox" name="answer" value={it.genre} id={`answer-${ind}`} />
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
};

export default GenreQuestionScreen;
