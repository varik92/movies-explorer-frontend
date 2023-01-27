import React from "react";
import { Route, Routes, useNavigate } from 'react-router-dom';
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
import * as MainApi from '../../utils/MainApi'
import * as MoviesApi from '../../utils/MoviesApi'

export default function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = React.useState({});
  const [allMovies, setAllMovies] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [loadingMore, setLoadingMore] = React.useState(false);
  const [moviesToRender, setMoviesToRender] = React.useState(JSON.parse(localStorage.getItem('moviesToRender')) || []);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [filtredMovies, setFiltredMovies] = React.useState(JSON.parse(localStorage.getItem('filtredMovies')) || []);
  const [checked, setChecked] = React.useState(JSON.parse(localStorage.getItem('checkbox')) || false);
  const [checkedSaved, setCheckedSaved] = React.useState(false)
  const [inputMoviesSearch, setInputMoviesSearch] = React.useState(localStorage.getItem('inputMoviesSearch') || '');
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [savedMoviesToRender, setSavedMoviesToRender] = React.useState(JSON.parse(localStorage.getItem('savedMoviesToRender')) || []);
  const [inputSavedSearch, setSavedInputSearch] = React.useState('');
  const [isSavedSearch, setSavedSearch] = React.useState('');
  const [registerErrorMessage, setRegisterErrorMessage] = React.useState('');
  const [loginErrorMessage, setLoginErrorMessage] = React.useState('');
  const [loggedIn, setLoggedIn] = React.useState(JSON.parse(localStorage.getItem('loggedIn')) || false);
  const [profileErrorMessage, setProfileErrorMessage] = React.useState('');

  React.useEffect(() => {
    async function getAllMovies() {
      const data = await MoviesApi.getMovies()
      setAllMovies(data)
    }

    getAllMovies()
  }, [])

  React.useEffect(() => {
    if (loggedIn) {
      tokenCheck();
    }
  }, [loggedIn]);

  React.useEffect(() => {
    if (loggedIn) {
      MainApi.getUserInfo()
        .then((res) => { setCurrentUser(res.data) })
        .catch((err) => console.log(err))
    }
  }, [loggedIn])

  function tokenCheck() {
    MainApi.getUserInfo()
      .then((res) => {
        if (res.data._id) {
          setCurrentUser(res.data);
          setLoggedIn(true);
          localStorage.setItem('loggedIn', true);
        }
      })
      .catch(err => console.log(err));
  };

  function numberMoviesToRender() {
    if (window.innerWidth >= 950) {
      return 12
    } else if (window.innerWidth >= 650) {
      return 8
    } else {
      return 5
    }
  }

  function numberMoviesMore() {
    if (window.innerWidth >= 825) {
      return 3
    } else {
      return 2
    }
  }

  function getMoviesToRender(moviesArr) {
    return moviesArr.slice(0, numberMoviesToRender())
  }

  function handleGetMovies(search) {
    setLoading(true)

    try {
      let data = allMovies.filter(({ nameRU }) =>
        nameRU.toLowerCase().includes(search.toLowerCase()));

      if (checked) {
        let shortData = data.filter(({ duration }) => duration <= 40)
        setFiltredMovies(shortData)
        setMoviesToRender(getMoviesToRender(shortData))
        localStorage.setItem('filtredMovies', JSON.stringify(shortData));
        localStorage.setItem('moviesToRender', JSON.stringify(getMoviesToRender(shortData)));
      } else {
        setFiltredMovies(data)
        setMoviesToRender(getMoviesToRender(data))
        localStorage.setItem('filtredMovies', JSON.stringify(data));
        localStorage.setItem('moviesToRender', JSON.stringify(getMoviesToRender(data)));
      }

      setInputMoviesSearch(search)

      localStorage.setItem('inputMoviesSearch', search);

    } catch (err) {
      setErrorMessage(
        'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
      );
    } finally {

      setLoading(false);
    }
  }

  function loadMore() {
    setLoadingMore(true)
    let n = numberMoviesMore()
    let nextNMovies = filtredMovies.slice(moviesToRender.length, moviesToRender.length + n);
    setMoviesToRender([...moviesToRender, ...nextNMovies])
    setLoadingMore(false)
  }

  function handleCheckbox() {
    setChecked(!checked);
    localStorage.setItem('checkbox', !checked);
  };
  React.useEffect(() => {
    handleGetMovies(inputMoviesSearch)
  }, [checked, allMovies])

  function handleSavedCheckbox() {
    setCheckedSaved(!checkedSaved)
  };
  React.useEffect(() => {
    handleSavedSearch(inputSavedSearch)
  }, [checkedSaved])

  function saveMovie(movie) {
    MainApi
      .saveMovie(movie)
      .then((m) => { setSavedMovies([m, ...savedMovies]); })
      .then((m) => { setSavedMoviesToRender([m, ...savedMovies]); })
      .catch((err) => { console.log(err); });
  };

  function deleteMovie(movieToDelete) {
    MainApi
      .deleteMovie(movieToDelete._id)
      .then(() => {
        const newSavedMoviesList = savedMovies.filter((item) => item._id !== movieToDelete._id);
        setSavedMovies(newSavedMoviesList);
        setSavedMoviesToRender(newSavedMoviesList)
      })
      .catch((err) => { console.log(err); });
  };

  function handleSavedSearch(search) {
    setSavedSearch(search)
    try {
      let data = savedMovies.filter(({ nameRU }) =>
        nameRU.toLowerCase().includes(search.toLowerCase()));

      if (checkedSaved) {
        let shortData = data.filter(({ duration }) => duration <= 40)
        setSavedMoviesToRender(shortData)
        localStorage.setItem('savedMoviesToRender', JSON.stringify(getMoviesToRender(shortData)));
      } else {
        setSavedMoviesToRender((data))
        localStorage.setItem('savedMoviesToRender', JSON.stringify(getMoviesToRender(data)));
      }

    } catch (err) {
      setErrorMessage(
        'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
      );
    } finally {
      setLoading(false);
    }
  }

  function handleRegister({ name, email, password }) {

    MainApi
      .register(name, email, password)
      .then((data) => {
        if (data) {
          handleLogin(email, password);
        }
      })
      .catch((err) => {
        setRegisterErrorMessage(err);
      });
  };

  function handleLogin(email, password) {
    MainApi
      .authorize(email, password)
      .then((res) => {
        if (res) {
          console.log(res)
          navigate('/movies');
          setLoggedIn(true);
        }
      })
      .catch((err) => {
        setLoginErrorMessage(err);
      });
  };

  async function handleEditUser(userData) {
    try {
      const user = await MainApi.editUserInfo(userData);
      setCurrentUser(user.data);
    } catch (err) {
      setProfileErrorMessage(err);
    }
  };

  async function handleSignOut() {
    try {
      await MainApi.logout();

      setLoggedIn(false);
      setCurrentUser({});
      navigate("/");
      localStorage.clear();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='app'>
        <Routes>
          <Route path='/' element={<Main loggedIn={loggedIn} />} />
          <Route path='/movies'
            element={<ProtectedRoute loggedIn={loggedIn}>
              <Movies handleSearch={handleGetMovies} checked={checked} handleCheckbox={handleCheckbox}
                setLoading={setLoading} filtredMovies={filtredMovies} loadMore={loadMore} loadingMore={loadingMore}
                saveMovie={saveMovie} savedMovies={savedMovies} deleteMovie={deleteMovie} moviesToRender={moviesToRender}
                loading={loading} inputSearch={inputMoviesSearch} setSavedMovies={setSavedMovies}
                setSavedMoviesToRender={setSavedMoviesToRender} setMoviesToRender={setMoviesToRender}
                allMovies={allMovies} loggedIn={loggedIn} />
            </ProtectedRoute>} />
          <Route path='/saved-movies'
            element={<ProtectedRoute loggedIn={loggedIn}>
              <SavedMovies handleSearch={handleSavedSearch} checked={checkedSaved} handleCheckbox={handleSavedCheckbox}
                moviesToRender={savedMoviesToRender} errorMessage={errorMessage} saveMovie={saveMovie} savedMovies={savedMovies}
                deleteMovie={deleteMovie} inputSearch={inputSavedSearch} setSavedMovies={setSavedMovies}
                setSavedMoviesToRender={setSavedMoviesToRender} loggedIn={loggedIn} />
            </ProtectedRoute>} />
          <Route path='/profile'
            element={<ProtectedRoute loggedIn={loggedIn}>
              <Profile loggedIn={loggedIn} profileErrorMessage={profileErrorMessage}
                onEditUser={handleEditUser} onSignOut={handleSignOut} />
            </ProtectedRoute>} />
          <Route path='/signup' element={<Register onRegister={handleRegister} registerErrorMessage={registerErrorMessage} />} />
          <Route path='/signin' element={<Login onLogin={handleLogin} loginErrorMessage={loginErrorMessage} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider >
  );
}
