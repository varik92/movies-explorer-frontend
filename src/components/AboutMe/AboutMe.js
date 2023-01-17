import './AboutMe.css';
import avatar from '../../images/avatar.jpg';

export default function AboutMe() {
    return (
        <section className='about-me'>
            <h2 className='about-me__header section-title'>Студент</h2>
            <div className='about-me__container'>
                <div className='about-me__description'>
                    <h3 className='about-me__name'>Вартан</h3>
                    <p className='about-me__job'>Фронтенд-разработчик, 30 лет</p>
                    <p className='about-me__text'>
                        Я родился в Волгограде, после получения среднеспециального образования переехал в Сочи. Работал 3 года геодезистом, получил высшее образование и 8 лет работаю строительно-техническим судебным экспертом. Хочу сменить сферу деятельности на более интересную для меня.
                    </p>
                    <a className='about-me__link' href='https://github.com/varik92' target='_blank'>Github</a>
                </div>
                <img src={avatar} alt='Аватар' className='about-me__avatar' />
            </div>
        </section >
    );
};
