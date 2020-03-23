const MILLISECONDS_IN_SECOND = 1000;

class Timer {
  constructor(timeRemaining = 0, timeTick = MILLISECONDS_IN_SECOND, onTick = () => {}) {
    this._timeRemaining = timeRemaining;
    this._timeTick = timeTick;

    this._onTick = onTick;
  }

  setTimer(time) {
    this._timeRemaining = time;
  }

  start() {
    this._timerID = setInterval(this._tick.bind(this), this._timeTick);
  }

  stop() {
    clearInterval(this._timerID);
  }

  _tick() {
    this._onTick(this._timeRemaining, this._timeTick);

    if (this._timeRemaining < this._timeTick) {
      this.stop();
    }

    this._timeRemaining -= this._timeTick;
  }

}


export default Timer;

