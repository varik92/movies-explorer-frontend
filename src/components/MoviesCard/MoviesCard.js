import './MoviesCard.css';
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function MoviesCard({ movieCard, saveMovie, deleteMovie, savedMovies }) {
    const location = useLocation();
    const [saved, setSaved] = React.useState(false);

    React.useEffect(() => {
        setSaved(savedMovies.some((m) => m.movieId === movieCard.id))
    })

    function toogleSave() {
        if (saved) {
            let movieToDelete = savedMovies.filter((s) => s.movieId === movieCard.id)[0]
            deleteMovie(movieToDelete);
            setSaved(false)
        } else {
            saveMovie(movieCard)
            setSaved(true)
        }
    }

    function handleDelete() {
        deleteMovie(movieCard)
    }

    return (
        <li className='movie-card'>
            <div className='movie-card__text-content'>
                <h2 className='movie-card__title'>{movieCard.nameRU}</h2>
                <p className='movie-card__duration'>{movieCard.duration} минут</p>
            </div>
            <a className='movie-card__link' href={movieCard.trailerLink} target='_blank'>
                <img src={location.pathname === '/movies' ? `https://api.nomoreparties.co${movieCard.image.url}` : `${movieCard.image}`} alt={movieCard.nameRU}
                    className='movie-card__image' />
            </a>

            {location.pathname === '/movies' && (
                <button type='button' className={`movie-card__button movie-card__button${saved ? '_type_saved' : ''}`}
                    onClick={toogleSave} >Сохранить</button>
            )}
            {location.pathname === '/saved-movies' && (
                <button type='button' className='movie-card__button movie-card__button_type_delete'
                    onClick={handleDelete} ></button>
            )
            }
        </li >
    )
}