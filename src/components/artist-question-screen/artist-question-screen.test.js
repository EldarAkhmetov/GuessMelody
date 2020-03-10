import React from 'react';
import renderer from 'react-test-renderer';
import ArtistQuestionScreen from './artist-question-screen.jsx';

it(`ArtistQuestionScreen correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<ArtistQuestionScreen
      question={{
        type: `genre`,
        song: {
          src: ``,
          artist: `Bob Marley`
        },
        answers: []
      }}
      onAnswer={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
