import React from 'react';
import PropTypes from 'prop-types';

const GenreQuestionScreen = (props) => {
  const {question, onAnswer} = props;
  const {answers, genre} = question;

  const answerSubmitHandler = (evt) => {
    evt.preventDefault();

    const answersForm = evt.currentTarget;
    const userAnswers = new FormData(answersForm).getAll(`answer`);
    onAnswer(userAnswers);
  };

  return (
    <section className="game game--genre">
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
        </a>

        <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
          <span className="timer__mins">05</span>
          <span className="timer__dots">:</span>
          <span className="timer__secs">00</span>
        </div>

        <div className="game__mistakes">
          <div className="wrong"></div>
          <div className="wrong"></div>
          <div className="wrong"></div>
        </div>
      </header>

      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form className="game__tracks" onSubmit={answerSubmitHandler}>
          {answers.map((it, ind) => {
            return (
              <div key={`track-${ind}`} className="track">
                <button className="track__button track__button--play" type="button"></button>
                <div className="track__status">
                  <audio src={it.src}></audio>
                </div>
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
};

GenreQuestionScreen.propTypes = {
  question: PropTypes.shape({
    type: PropTypes.string,
    genre: PropTypes.string,
    answers: PropTypes.array,
  }),
  onAnswer: PropTypes.func.isRequired,
};

export default GenreQuestionScreen;
