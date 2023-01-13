import './Portfolio.css';

export default function Portfolio() {
    return (
        <section className='portfolio'>
            <h3 className='portfolio__header'>Портфолио</h3>
            <ul className='portfolio__list'>
                <li className='portfolio__list-item'>
                    <a className='portfolio__list-link' href='https://github.com/varik92/how-to-learn' target='_blank' >
                        Статичный сайт
                    </a>
                </li>
                <li className='portfolio__list-item'>
                    <a className='portfolio__list-link' href='https://github.com/varik92/russian-travel' target='_blank'>
                        Адаптивный сайт
                    </a>
                </li>
                <li className='portfolio__list-item'>
                    <a className='portfolio__list-link' href='https://github.com/varik92/react-mesto-api-full' target='_blank'>
                        Одностраничное приложение
                    </a>
                </li>
            </ul>
        </section>
    );
};
