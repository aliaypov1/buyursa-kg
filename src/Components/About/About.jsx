
import style from './About.module.css'
import Header from '../Header/Header';
import gImg from '../img/buyrsa.jpg'
import Footer from '../Footer/Footer';


const About = () => {
    return (
        <>
            <Header />
            <section className={style.about}>
                <div className={style.about__container}>
                    <div className="">
                        <h1 className={style.about__title}>Подберем для вас<br /> Подходящий курс</h1>
                        <p className={style.about__text}>Лучшие курсы Кыргызыстана спциально  <br /> собраны для вас</p>
                        <div className={style.buttons}>

                        </div>

                    </div>
                    <div className={style.g__img}>
                        <img src={gImg} alt="" />
                    </div>

                </div>
            </section>
            <section className={style.content}>
                <div className="container">
                    <div className={style.content__card}>
                        <div className={style.content__cards}>
                            <h1 className={style.content__title}>О курсах</h1>
                            <p className={style.content__text}>Мы сами учились за границей и знаем, как бывает сложно и страшно на этом пути. Чтобы поддержать таких же талантливых и амбициозных студентов, мы создали международное образовательное агентство UniPage.
                                <p className={style.content__sm_title}>Каждый год сотни людей реализуют мечту об обучении за границей с нашей помощью.</p> </p>
                        </div>
                        <div className={style.content__cards2}>
                            <div className={style.content__img}>
                                <img src="https://img.freepik.com/premium-photo/multiracial-creative-people-modern-office-group-young-business-people-senior-boss-are-working-together-with-laptop-tablet-smart-phone-notebook-graphs-successful-team-coworking_452079-107.jpg?w=2000" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={style.services}>

                <div className={style.services__container}>
                    <div className={style.services__title}>
                        <h3>Наши услуги</h3>
                        <p>Добро пожаловать в нашу уникальную платформу образования! Мы - команда профессионалов, страстно увлеченных образованием и жаждущих помочь вам достичь ваших учебных целей.

Наши услуги предлагают широкий спектр курсов, которые помогут вам расширить свои знания и улучшить навыки в различных областях. Независимо от вашего уровня подготовки или профессионального опыта, у нас есть курсы, которые подойдут именно вам.</p>
                   </div>

                    <div className={style.services__cards}>
                        <div>
                            <h4>
                            Что делает нашу платформу особенной? 
                            </h4>
                            <p>Во-первых, мы тщательно отбираем наших преподавателей. Все они являются экспертами в своих областях и обладают обширным педагогическим опытом. Вы получите учебный материал от ведущих специалистов, которые помогут вам углубить свое понимание предмета.Во-вторых, мы предлагаем гибкий формат обучения. Наши курсы доступны онлайн, что позволяет вам учиться в удобное для вас время и из любой точки мира. </p>
                        </div>
                        <img src="https://w.forfun.com/fetch/73/73016504a327d73abdac8b429d9214c5.jpeg" alt="" />
                    </div>

                    <div className={style.services__cards}>
                        <img src="https://w.forfun.com/fetch/73/73016504a327d73abdac8b429d9214c5.jpeg" alt="" />
                        <div>
                            <h4>
                            Наша цель
                            </h4>
                            <p>не только предоставить вам академическое образование, но и вдохновить вас на достижение больших результатов. Мы стремимся создать пространство, где студенты могут развивать свой творческий потенциал, искать новые идеи и общаться с единомышленниками. Мы верим, что образование должно быть вдохновляющим и интерактивным, и мы делаем все возможное, чтобы обеспечить вас самыми инновационными методами обучения.</p>
                        </div>

                    </div>

                    <div className={style.services__cards}>
                        <div>
                            <h4>
                            Присоединяйтесь
                            </h4>
                            <p>Присоединяйтесь к нашей платформе сегодня и откройте новые горизонты образования! Разблокируйте свой потенциал, достигните своих целей и станьте экспертом в своей области. Мы будем рядом с вПрисоединяйтесь к нашей платформе сегодня и откройте новые горизонты образования! Разблокируйте свой потенциал, достигните своих целей и станьте экспертом в своей области. Мы будем рядом с в</p>
                        </div>
                        <img src="https://w.forfun.com/fetch/73/73016504a327d73abdac8b429d9214c5.jpeg" alt="" />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default About;