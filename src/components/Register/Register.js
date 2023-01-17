import '../Form/Form.css';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

export default function Register() {
    return (
        <form className='form' >
            <Logo greeting={'Добро пожаловать!'} />
            <label className='form__label'>
                Имя
                <input className='form__input' type='text' />
            </label>
            <span className={'form__error  form__error_active'}>Сообщение об ошибке</span>

            <label className='form__label'>
                E-mail
                <input className='form__input' type='email' />
            </label>
            <span
                className={'form__error form__error_active'} > Сообщение об ошибке
            </span>

            <label className='form__label'>
                Пароль
                <input className='form__input' type='password' />
            </label>
            <span
                className='form__error form__error_active'> Сообщение об ошибке
            </span>

            <div className='form__button-container form__button-container_type_register'>
                <span className={`form__server-error ${1 ? 'form__server-error_active' : ''}`}>Сообщение об ошибке</span>
                <button className={`form__button ${0 ? 'form__button_disabled' : ''}  `}>Зарегистрироваться</button>
                <p className='form__subtitle'>
                    Уже зарегистрированы?
                    <Link to='/signin' className='form__link'> Войти</Link>
                </p>
            </div>
        </form >
    )
}