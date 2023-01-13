import './Footer.css';

export default function Footer() {
    return (
        <footer className='footer'>
            <h3 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
            <div className='footer__container'>
                <p className='footer__copyright'>&copy; 2023</p>
                <ul className='footer__list'>
                    <li className='footer__item'>
                        <a className='footer__link' href='https://practicum.yandex.ru/web/' target='_blank'>Яндекс.Практикум</a>
                    </li>
                    <li className='footer__item'>
                        <a className='footer__link' href='https://github.com/varik92/' target='_blank'>Github</a>
                    </li>
                </ul>
            </div>
        </footer >
    );
};
