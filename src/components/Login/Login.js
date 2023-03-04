import '../Form/Form.css';
import React from "react";
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../utils/useFormWithValidation';

export default function Login({ onLogin, loginErrorMessage }) {
    const {
        values, handleChange, error, isValid
    } = useFormWithValidation({ email: '', password: '' });

    function handleSubmit(e) {
        e.preventDefault();
        onLogin(values.email, values.password);
    };

    return (
        <form className='form' onSubmit={handleSubmit} noValidate>
            <Logo greeting={'Рады видеть!'} />

            <label className='form__label'>
                E-mail
                <input className='form__input' type='email' name="email" value={values.email}
                    onChange={handleChange} pattern='[^@\s]+@[^@\s]+\.[^@\s]+' required />
            </label>
            <span
                className={`form__error ${error.email && 'form__error_active'}`} > {error.email ? error.email : 1}
            </span>

            <label className='form__label'>
                Пароль
                <input className='form__input' type='password' name="password" value={values.password}
                    onChange={handleChange} required />
            </label>
            <span
                className={`form__error ${error.password && 'form__error_active'}`}> {error.password ? error.password : 1}
            </span>
            <div className='form__button-container form__button-container_type_login'>
                <span className={`form__server-error ${loginErrorMessage ? 'form__server-error_active' : ''}`}>
                    {loginErrorMessage ? loginErrorMessage : 1}</span>
                <button className={`form__button ${isValid ? '' : 'form__button_disabled'}  `}>Войти</button>
                <p className='form__subtitle'>
                    Ещё не зарегистрированы?
                    <Link to='/signup' className='form__link'> Регистрация</Link>
                </p>
            </div>
        </form >
    )
}