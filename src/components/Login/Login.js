import '../Form/Form.css';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <form className='form' >
            <Logo greeting={'Рады видеть!'} />

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
            <div className='form__button-container form__button-container_type_login'>
                <span className={`form__server-error ${1 ? 'form__server-error_active' : ''}`}>Сообщение об ошибке</span>
                <button className={`form__button ${0 ? 'form__button_disabled' : ''}  `}>Войти</button>
                <p className='form__subtitle'>
                    Ещё не зарегистрированы?
                    <Link to='/signup' className='form__link'> Регистрация</Link>
                </p>
            </div>
        </form >
    )
}