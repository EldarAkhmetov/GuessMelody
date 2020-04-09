import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator} from '../../reducer/game/reducer.js';

import GameTimer from '../game-timer/game-timer.jsx';

const GameHeader = (props) => {


  const {gameResetHandler, mistakes} = props;

  return (
    <header className="game__header">
      <a className="game__back" href="#" onClick={(evt) => {
        evt.preventDefault();
        gameResetHandler();
      }}>
        <span className="visually-hidden">Сыграть ещё раз</span>
        <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
      </a>

      <GameTimer />

      <div className="game__mistakes">
        {new Array(3).fill(`correct`).map((it, ind) => {
          return <div key={`wrong-answer-${ind}`} className={ind >= mistakes ? it : `wrong`}></div>;
        })}
      </div>
    </header>
  );
};

GameHeader.propTypes = {
  mistakes: PropTypes.number.isRequired,
  gameResetHandler: PropTypes.func
};

const mapStateToProps = (state) => ({
  mistakes: state.game.mistakes
});

const mapDispatchToProps = (dispatch) => ({
  gameResetHandler: () => dispatch(ActionCreator.resetGame())
});

export {GameHeader};

export default connect(mapStateToProps, mapDispatchToProps)(GameHeader);
