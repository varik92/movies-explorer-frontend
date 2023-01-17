import React from "react";
import { Router, Route, Routes, Redirect, useHistory } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import './App.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js'
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';

export default function App() {

  const [currentUser, setCurrentUser] = React.useState({});

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='app'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/saved-movies' element={<SavedMovies />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/signup' element={<Register />} />
          <Route path='/signin' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        {/*
          <Route>
            {loggedIn ? <Redirect to="/" /> : <Redirect to="/signin" />}
          </Route>
         */}
      </div>
    </CurrentUserContext.Provider>
  );
}
