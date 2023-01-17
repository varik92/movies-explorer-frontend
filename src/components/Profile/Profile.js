import './Profile.css';
import Header from '../Header/Header'

export default function Profile() {

    return (
        <><Header />
            <section className='profile'>
                <h2 className='profile__title'>Привет, Вартан!</h2>
                <div className='profile__user-name'>
                    <p className='profile__text'>Имя</p>
                    <input className='profile__input profile__text' type='text' defaultValue='Вартан' />
                </div>
                <div className='profile__user-email'>
                    <p className='profile__text'>E-mail</p>
                    <input className='profile__input profile__text' type='email' defaultValue='vrtndvtn@yandex.ru' />
                </div>
                <button className='profile__btn-edit' type='button' href='/'>Редактировать</button>
                <button className='profile__btn-logout' type='button' >Выйти из аккаунта</button>
            </section >
        </>
    )
}
