import './MoviesCardList.css';
import React from "react";
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

export default function MoviesCardList({ moviesToRender, errorMessage, loadMore, filtredMovies,
    loadingMore, saveMovie, savedMovies, deleteMovie, inputSearch }) {
    const location = useLocation();
    console.log(moviesToRender)
    return (
        location.pathname === '/movies' ? (
            !inputSearch ? <div></div> : errorMessage ? <div className='movies-cards__text'>{errorMessage}</div> :
                (<section className='movies-cards'>
                    {moviesToRender.length ?
                        <ul className='movies-cards__list'>
                            {moviesToRender.map((card) => (
                                <MoviesCard key={card.id} movieCard={card} saveMovie={saveMovie}
                                    deleteMovie={deleteMovie} savedMovies={savedMovies} />
                            ))}
                        </ul> :
                        <div className='movies-cards__text'>Ничего не найдено</div>
                    }
                    {loadingMore ? (
                        <Preloader />
                    ) : (
                        moviesToRender.length !== filtredMovies.length ?
                            <div className='movies-cards__btn-container'>
                                <button className='movies-cards__btn-more' type='button' name='loadMore'
                                    onClick={loadMore}>Ещё</button>
                            </div> : ''
                    )}
                </section>)) : (
            !savedMovies.length ? <div className='movies-cards__text'>Нет сохраненных фильмов</div> : errorMessage ? <div className='movies-cards__text'>{errorMessage}</div> :
                (<section className='movies-cards'>
                    {moviesToRender.length ?
                        <ul className='movies-cards__list'>
                            {moviesToRender.map((card) => (
                                <MoviesCard key={card.movieId} movieCard={card} saveMovie={saveMovie}
                                    deleteMovie={deleteMovie} savedMovies={savedMovies} />
                            ))}
                        </ul> :
                        <div className='movies-cards__text'>Ничего не найдено</div>
                    }
                </section>)
        )
    );
};
