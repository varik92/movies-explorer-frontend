import './Profile.css';
import React from 'react';
import Header from '../Header/Header'
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../utils/useFormWithValidation';

export default function Profile({ loggedIn, profileErrorMessage, onEditUser, onSignOut, showSuccessMessage }) {
    const currentUser = React.useContext(CurrentUserContext);
    const currentValues = { name: currentUser.name, email: currentUser.email };

    const { values, handleChange, isValid, } = useFormWithValidation(currentValues);

    const isProfileValid = isValid && (values.name !== currentValues.name && values.email !== currentValues.email);

    function handleEditUser(e) {
        e.preventDefault();
        onEditUser({ name: values.name || currentUser.name, email: values.email || currentUser.email })
    }

    return (
        <>
            <Header loggedIn={loggedIn} />
            <section className='profile'>
                <h2 className='profile__title'>{`Привет, ${currentUser.name}!`}</h2>
                <span className={`profile__success-message ${showSuccessMessage ? 'profile__success-message_active' : ''}`}>Данные успешно изменены!</span>
                <form className='profile__form' onSubmit={handleEditUser} noValidate>
                    <div className='profile__user-name'>
                        <p className='profile__text'>Имя</p>
                        <input className='profile__input profile__text' type='text' name='name'
                            value={values.name || currentUser.name} onChange={handleChange} />
                    </div>
                    <div className='profile__user-email'>
                        <p className='profile__text'>E-mail</p>
                        <input className='profile__input profile__text' type='email' name='email'
                            value={values.email || currentUser.email} onChange={handleChange} pattern='[^@\s]+@[^@\s]+\.[^@\s]+' />
                    </div>
                    <span className={`profile__server-error ${profileErrorMessage ? 'profile__server-error_active' : ''}`}>
                        {profileErrorMessage ? profileErrorMessage : 1}</span>
                    <button className={`profile__btn-edit ${isProfileValid ? '' : 'profile__btn-edit_disabled'}`}
                        type='submit'>Редактировать</button>
                </form>
                <button className='profile__btn-logout' type='button' onClick={onSignOut}
                >Выйти из аккаунта</button>
            </section >
        </>
    )
}
