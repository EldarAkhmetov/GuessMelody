import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<App
      gameTime={5}
      errorCount={3}
      questions={[]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
