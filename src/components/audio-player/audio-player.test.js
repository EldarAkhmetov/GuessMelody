import React from 'react';
import renderer from 'react-test-renderer';
import AudioPlayer from './audio-player.jsx';

it(`AudioPlayer correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<AudioPlayer
      isPlaying={false}
      src={`http://dl2.mp3party.net/online/9116246.mp3`}
      onPlayButtonClick={() => {}}
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
