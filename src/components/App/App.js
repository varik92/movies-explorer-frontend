import React from "react";
import { Router, Route, Routes, Redirect, useHistory } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import './App.css';
import Header from '../Header/Header'
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js'
import Main from '../Main/Main'
import Movies from '../Movies/Movies'

function App() {

  const [currentUser, setCurrentUser] = React.useState({});

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes >
        <Routes>
          <Route path='/movies' element={<Movies />} />
        </Routes >
        {/*  
          <Route path='/signup'>
            <Register onRegister={handleRegister} />
          </Route>
          <Route path='/signin'>
            <Login onLogin={handleLogin} />
          </Route>
          <ProtectedRoute
            exact path='/'
            component={Main}
            loggedIn={loggedIn} />
          <Route>
            {loggedIn ? <Redirect to="/" /> : <Redirect to="/signin" />}
          </Route>
         */}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
