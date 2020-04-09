import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator} from '../../reducer/game/reducer.js';


const WinScreen = (props) => {
  const {gameResetHandler} = props;

  return (
    <Fragment>
      <section className="login">
        <div className="login__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" /></div>
        <h2 className="login__title">Вы настоящий меломан!</h2>
        <p className="login__total">За 3 минуты и 25 секунд вы набрали 12 баллов (8 быстрых), совершив 3 ошибки</p>
        <p className="login__text">Хотите сравнить свой результат с предыдущими попытками? Представтесь!</p>
        <form className="login__form" action="">
          <p className="login__field">
            <label className="login__label" htmlFor="name">Логин</label>
            <input className="login__input" type="text" name="name" id="name" />
          </p>
          <p className="login__field">
            <label className="login__label" htmlFor="password">Пароль</label>
            <input className="login__input" type="text" name="password" id="password" />
            <span className="login__error">Неверный пароль</span>
          </p>
          <button className="login__button button" type="submit">Войти</button>
        </form>
        <button className="replay" type="button" onClick={gameResetHandler}>Сыграть ещё раз</button>
      </section>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  gameResetHandler: () => dispatch(ActionCreator.resetGame())
});

WinScreen.propTypes = {
  gameResetHandler: PropTypes.func
};

export {WinScreen};

export default connect(null, mapDispatchToProps)(WinScreen);
