import './NavTab.css';

export default function NavTab() {
    return (
        <section className='nav-tab'>
            <nav className='nav-tab__container'>
                <ul className='nav-tab__list'>
                    <li className='nav-tab__item'>
                        <a href='#about-project' className='nav-tab__link'>
                            О проекте
                        </a>
                    </li>
                    <li className='nav-tab__item'>
                        <a href='#techs' className='nav-tab__link'>
                            Технологии
                        </a>
                    </li>
                    <li className='nav-tab__item'>
                        <a href='#student' className='nav-tab__link'>
                            Студент
                        </a>
                    </li>
                </ul>
            </nav>
        </section>
    );
}