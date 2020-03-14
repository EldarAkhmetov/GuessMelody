import React from 'react';
import renderer from 'react-test-renderer';
import ArtistQuestionScreen from './artist-question-screen.jsx';

it(`ArtistQuestionScreen correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<ArtistQuestionScreen
      question={{
        type: `artist`,
        song: {
          src: `http://dl2.mp3party.net/online/9116246.mp3`,
          artist: `Bob Marley`
        },
        answers: []
      }}
      onAnswer={() => {}}
    />,
    {
      createNodeMock: (element) => {
        if (element.type === `audio`) {
          return {
            src: null
          };
        }
        return null;
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
