import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AudioPlayer from './audio-player.jsx';

Enzyme.configure({adapter: new Adapter()});

window.HTMLMediaElement.prototype.play = () => { /* do nothing */ };
window.HTMLMediaElement.prototype.pause = () => { /* do nothing */ };

it(`Should disable play button while on loading`, () => {
  const srcMock = `http://dl2.mp3party.net/online/9116246.mp3`;
  const tree = mount(<AudioPlayer
    isPlaying={false}
    src={srcMock}
    onPlayButtonClick={() => {}}
  />);

  expect(tree.state(`isLoading`)).toEqual(true);
  let playButton = tree.find(`.track__button--play`);
  expect(playButton.getElement().props.disabled).toEqual(true);
  tree.setState({isLoading: false});
  playButton = tree.find(`.track__button--play`);
  expect(playButton.getElement().props.disabled).toEqual(false);
});

it(`Should play/pause when play/pause button is clicked`, () => {
  const srcMock = `http://dl2.mp3party.net/online/9116246.mp3`;
  const tree = mount(<AudioPlayer
    isPlaying={false}
    src={srcMock}
    onPlayButtonClick={() => {}}
  />);

  expect(tree.state(`isPlaying`)).toEqual(false);
  tree.setState({isLoading: false});

  const playButton = tree.find(`.track__button--play`);
  playButton.simulate(`click`);
  expect(tree.state(`isPlaying`)).toEqual(true);

  const pauseButton = tree.find(`.track__button--pause`);
  pauseButton.simulate(`click`);
  expect(tree.state(`isPlaying`)).toEqual(false);

});
