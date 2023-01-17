import './Navigation.css';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navigation() {
    const [showItems, setShowItems] = useState(false);

    const handleToggleMenu = () => setShowItems(!showItems);

    return (
        <nav className='navigation'>
            <button className='navigation__btn-menu' type='button' onClick={handleToggleMenu}></button>
            <div className={`navigation__container ${showItems ? 'navigation__container_visible' : ''}`}>
                <div className='navigation__sidebar'>
                    <div className='navigation__list-container'>
                        <button className='navigation__btn-close' type='button' onClick={handleToggleMenu}></button>
                        <ul className='navigation__list'>
                            <li className='navigation__list-item navigation__list-item_type_main'>
                                <NavLink to='/' className='navigation__link'>Главная</NavLink>
                            </li>
                            <li className='navigation__list-item'>
                                <NavLink to='/movies' className='navigation__link'>Фильмы</NavLink>
                            </li>
                            <li className='navigation__list-item'>
                                <NavLink to='/saved-movies' className='navigation__link'>Сохранённые фильмы</NavLink>
                            </li>
                        </ul>
                    </div>
                    <Link to='/profile' className='navigation__link navigation__link_type_profile'>
                        <div className='navigation__profile-icon'></div>
                        <p className='navigation__profile-text'>Аккаунт</p>
                    </Link>
                </div>
            </div>
        </nav>
    );
};
