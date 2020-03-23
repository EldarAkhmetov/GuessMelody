import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const formatTime = (milliseconds) => {
  const minutes = Math.floor(milliseconds / 1000 / 60);
  const seconds = milliseconds / 1000 % 60;

  return {
    minutes: minutes < 10 ? `0${minutes}` : minutes,
    seconds: seconds < 10 ? `0${seconds}` : seconds
  };
};

const GameTimer = (props) => {
  const gameHeaderStyle = {
    filter: `url(#blur)`,
    transform: `rotate(-90deg) scaleY(-1)`,
    transformOrigin: `center`
  };

  const {gameTimeRemaining} = props;

  const formatedTime = formatTime(gameTimeRemaining);
  console.log(gameTimeRemaining);

  return (
    <Fragment>
      <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
        <circle className="timer__line" cx="390" cy="390" r="370" style={gameHeaderStyle} />
      </svg>

      <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
        <span className="timer__mins">{formatedTime.minutes}</span>
        <span className="timer__dots">:</span>
        <span className="timer__secs">{formatedTime.seconds}</span>
      </div>
    </Fragment>
  );
};

GameTimer.propTypes = {
  gameTimeRemaining: PropTypes.number
};

const mapStateToProps = (state) => ({
  gameTimeRemaining: state.gameTimeRemaining
});

export {GameTimer};

export default connect(mapStateToProps)(GameTimer);
