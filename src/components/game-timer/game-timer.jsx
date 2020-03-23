import React, {Fragment} from 'react';

const GameTimer = () => {
  const gameHeaderStyle = {
    filter: `url(#blur)`,
    transform: `rotate(-90deg) scaleY(-1)`,
    transformOrigin: `center`
  };

  return (
    <Fragment>
      <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
        <circle className="timer__line" cx="390" cy="390" r="370" style={gameHeaderStyle} />
      </svg>

      <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
        <span className="timer__mins">05</span>
        <span className="timer__dots">:</span>
        <span className="timer__secs">00</span>
      </div>
    </Fragment>
  );
};

export default GameTimer;
