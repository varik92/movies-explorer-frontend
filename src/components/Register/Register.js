import '../Form/Form.css';
import React from "react";
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../utils/useFormWithValidation';

export default function Register({ onRegister, registerErrorMessage }) {
    const {
        values, handleChange, error, isValid
    } = useFormWithValidation({ name: '', email: '', password: '' });

    function handleSubmit(e) {
        e.preventDefault();
        onRegister(values);
    };

    return (
        <form className='form' onSubmit={handleSubmit} noValidate>
            <Logo greeting={'Добро пожаловать!'} />
            <label className='form__label'>
                Имя
                <input className='form__input' name='name' type='text' value={values.name} onChange={handleChange}
                    minLength='2' maxLength='30' required />
            </label>
            <span className={`form__error ${error.name && 'form__error_active'}`}>{error.name ? error.name : 1}</span>

            <label className='form__label'>
                E-mail
                <input className='form__input' name='email' type='email' value={values.email} onChange={handleChange}
                    pattern='[^@\s]+@[^@\s]+\.[^@\s]+' required />
            </label>
            <span
                className={`form__error ${error.email && 'form__error_active'}`} > {error.email ? error.email : 1}
            </span>

            <label className='form__label'>
                Пароль
                <input className='form__input' name='password' type='password' value={values.password} onChange={handleChange} required />
            </label>
            <span
                className={`form__error ${error.password && 'form__error_active'}`}> {error.password ? error.password : 1}
            </span>

            <div className='form__button-container form__button-container_type_register'>
                <span className={`form__server-error ${registerErrorMessage ? 'form__server-error_active' : ''}`}>
                    {registerErrorMessage ? registerErrorMessage : 1}</span>
                <button className={`form__button ${isValid ? '' : 'form__button_disabled'}  `}>Зарегистрироваться</button>
                <p className='form__subtitle'>
                    Уже зарегистрированы?
                    <Link to='/signin' className='form__link'> Войти</Link>
                </p>
            </div>
        </form >
    )
}