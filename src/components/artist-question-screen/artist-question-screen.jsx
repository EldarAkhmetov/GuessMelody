import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import GameHeader from '../game-header/game-header.jsx';
import AudioPlayer from '../audio-player/audio-player.jsx';

class ArtistQuestionScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      audioPlayerID: -1
    };
  }

  _answerChangeHandler(evt) {
    const answersForm = evt.currentTarget;
    const userAnswers = new FormData(answersForm).getAll(`answer`);
    this.props.onAnswer(userAnswers);
  }

  _playButtonClickHandler(audioPlayerID) {
    this.setState((prevState) => {
      return {
        audioPlayerID: prevState.audioPlayerID === audioPlayerID ? -1 : audioPlayerID
      };
    });
  }

  render() {
    const {audioPlayerID} = this.state;
    const {question} = this.props;
    const {song, answers} = question;
    const titleAudioPlayer = 0;

    return (
      <section className="game game--artist">
        <GameHeader />

        <section className="game__screen">
          <h2 className="game__title">Кто исполняет эту песню?</h2>
          <div className="game__track">
            <div className="track">
              <AudioPlayer
                isPlaying={titleAudioPlayer === audioPlayerID}
                src={song.src}
                onPlayButtonClick={() => this._playButtonClickHandler(titleAudioPlayer)}
              />
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
};

export default ArtistQuestionScreen;
