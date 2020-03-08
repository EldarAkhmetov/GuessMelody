import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen.jsx';

it(`WelcomeScreen correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<WelcomeScreen
      time={5}
      errorsCount={3}
      onClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
