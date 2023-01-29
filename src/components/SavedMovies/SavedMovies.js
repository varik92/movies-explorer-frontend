import './SavedMovies.css';
import React from "react";
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header'
import Preloader from '../Preloader/Preloader';
import * as MainApi from '../../utils/MainApi'

export default function SavedMovies({ checked, handleCheckbox, moviesToRender, errorMessage, filtredMovies,
    loadMore, saveMovie, savedMovies, deleteMovie, handleSearch, inputSearch, setSavedMovies,
    setSavedMoviesToRender, loggedIn, currentUser, setCurrentUserSavedMovies }) {

    const [isPreloader, setIsPreloader] = React.useState(true)
    React.useEffect(() => {
        async function getSavedMovies() {
            const mov = await MainApi.getSavedMovies()
            let userMovies = mov.data.filter(({ owner }) => owner === currentUser._id)
            setSavedMovies(mov.data)
            setCurrentUserSavedMovies(userMovies)
            setSavedMoviesToRender(userMovies)
            setIsPreloader(false)
        }
        getSavedMovies()
    }, [])

    return (
        <>
            <Header loggedIn={loggedIn} />
            <main className='saved-movies'>
                <SearchForm handleSearch={handleSearch} checked={checked} handleCheckbox={handleCheckbox}
                    inputSearch={inputSearch} />
                {isPreloader ? (
                    <Preloader />
                ) : (
                    <MoviesCardList moviesToRender={moviesToRender}
                        errorMessage={errorMessage} filtredMovies={filtredMovies}
                        loadMore={loadMore} saveMovie={saveMovie}
                        savedMovies={savedMovies} deleteMovie={deleteMovie} />
                )}
            </main>
            <Footer />
        </>
    );
};
