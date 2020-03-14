import React from 'react';
import renderer from 'react-test-renderer';
import GameHeader from './game-header.jsx';

it(`GameHeader correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<GameHeader />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
