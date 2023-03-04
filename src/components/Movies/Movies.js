import './Movies.css';
import React from "react";
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';
import Header from '../Header/Header'
import * as MainApi from '../../utils/MainApi'

export default function Movies({ handleSearch, checked, handleCheckbox, moviesToRender,
    errorMessage, filtredMovies, loadMore, loadingMore, saveMovie, savedMovies, deleteMovie, inputSearch,
    setSavedMovies, setSavedMoviesToRender, allMovies, loggedIn, currentUser, setCurrentUserSavedMovies }) {

    React.useEffect(() => {
        async function getSavedMovies() {
            const mov = await MainApi.getSavedMovies()
            let userMovies = mov.data.filter(({ owner }) => owner === currentUser._id)
            setSavedMovies(mov.data)
            setCurrentUserSavedMovies(userMovies)
            setSavedMoviesToRender(userMovies)
        }
        getSavedMovies()
    }, [])

    return (
        <>
            <Header loggedIn={loggedIn} />
            <main className='movies'>
                <SearchForm handleSearch={handleSearch} checked={checked} handleCheckbox={handleCheckbox}
                    inputSearch={inputSearch} />
                {!allMovies.length ? (
                    <Preloader />
                ) : (
                    <MoviesCardList moviesToRender={moviesToRender} errorMessage={errorMessage}
                        filtredMovies={filtredMovies} loadMore={loadMore} loadingMore={loadingMore}
                        saveMovie={saveMovie} savedMovies={savedMovies} deleteMovie={deleteMovie}
                        inputSearch={inputSearch} currentUser={currentUser}
                    />
                )}
            </main>
            <Footer />
        </>
    )
}

