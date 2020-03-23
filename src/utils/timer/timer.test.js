import Timer from './timer.js';

describe(`Timer should work correctly`, () => {
  const timeRemaining = 3;
  const timeInMilliseconds = 1000;
  const onTick = () => {};

  it(`Timer should initialize correctly`, () => {
    const timer = new Timer(timeRemaining, timeInMilliseconds, onTick);
    expect(timer._timeRemaining).toBe(timeRemaining);
  });


});
