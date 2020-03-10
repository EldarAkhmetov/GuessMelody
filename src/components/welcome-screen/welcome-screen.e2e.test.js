import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WelcomeScreen from './welcome-screen.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`Callback function launches after "Start" button is clicked`, () => {
  const clickHandler = jest.fn();

  const tree = shallow(<WelcomeScreen
    time={5}
    errorCount={3}
    onWelcomeButtonClick={clickHandler}
  />);

  const startButton = tree.find(`.welcome__button`);
  startButton.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
