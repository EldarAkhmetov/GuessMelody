import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ArtistQuestionScreen from './artist-question-screen.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`Should launch onAnswer with userAnswers parameter`, () => {
  const questionMock = {
    type: `artist`,
    song: {
      src: ``,
      artist: `Bob Marley`
    },
    answers: [
      {
        src: ``,
        artist: `Bob Marley`
      }
    ]
  };

  const clickHandler = jest.fn();
  const userAnswers = [];

  const tree = shallow(<ArtistQuestionScreen
    question={questionMock}
    onAnswer={clickHandler}
  />);

  const preventDefault = () => {};

  const form = tree.find(`.game__artist`);
  form.simulate(`change`, {preventDefault});

  expect(clickHandler).toHaveBeenCalledWith(userAnswers);
});
