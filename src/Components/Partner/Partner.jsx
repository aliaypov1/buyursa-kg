import React from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import style from './Partner.module.css'

const Partner = () => {
  return (
    <div>
      <Header />
      <section className={style.about}>

        <div className="container">
          <h1 className={style.about__title}>Станьте продавцом И </h1>
          <p className={style.about__text}>Зарабатывайте на своих продажах</p>
          <div className={style.buttons}>

            <Link to='/CreateCursSeller' className={style.about__text} style={{ background: 'rgb(173, 215, 20)', padding: '10px', borderRadius: '9px' }}>Начать</Link>
          </div>
          <div className={style.about__wrapper}>
            <a href="#" className={style.wrapper__title}><p className={style.wrapper__text} >2023+</p> год основания</a>
            <a href="#" className={style.wrapper__title}><p className={style.wrapper__text}>4 000+</p> cтудентов</a>
            <a href="#" className={style.wrapper__title}><p className={style.wrapper__text}>5 000+</p> публикаций</a>
            <a href="#" className={style.wrapper__title}><p className={style.wrapper__text}>28 000+</p> университетов</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partner;