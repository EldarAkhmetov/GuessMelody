import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import GenreQuestionScreen from './genre-question-screen.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`Should preventDefalut on form submit`, () => {
  const questionMock = {
    type: `genre`,
    genre: `pop`,
    answers: [
      {
        src: ``,
        genre: `rock`
      }
    ]
  };

  const preventDefault = jest.fn();

  const tree = shallow(<GenreQuestionScreen
    question={questionMock}
    onAnswer={jest.fn()}
  />);

  const form = tree.find(`form.game__tracks`);
  form.simulate(`submit`, {preventDefault});

  expect(preventDefault).toHaveBeenCalledTimes(1);
});

it(`Should launch onAnswer with userAnswers parameter`, () => {
  const questionMock = {
    type: `genre`,
    genre: `pop`,
    answers: [
      {
        src: ``,
        genre: `rock`
      }
    ]
  };

  const userAnswers = [];
  const clickHandler = jest.fn();
  const preventDefault = () => {};

  const tree = shallow(<GenreQuestionScreen
    question={questionMock}
    onAnswer={clickHandler}
  />);

  const form = tree.find(`.game__tracks`);
  form.simulate(`submit`, {preventDefault});

  expect(clickHandler).toHaveBeenCalledWith(userAnswers);
});
