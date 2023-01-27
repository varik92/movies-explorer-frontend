import React from "react";
import { Link } from 'react-router-dom';
import './Header.css'
import Navigation from '../Navigation/Navigation';
import NavAuth from '../NavAuth/NavAuth';

export default function Header({ loggedIn }) {

    return (
        <header className='header'>
            <Link to='/' className='header__logo'></Link>
            {loggedIn ? <Navigation /> : <NavAuth />}
        </header >
    )
}