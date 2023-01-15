import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

export default function MoviesCard({ movieCard }) {
    const location = useLocation();

    return (
        <li className='movie-card'>
            <div className='movie-card__text-content'>
                <h2 className='movie-card__title'>{movieCard.nameRU}</h2>
                <p className='movie-card__duration'>{movieCard.duration} минут</p>
            </div>
            <img src={movieCard.image} alt={movieCard.nameRU} className='movie-card__image' />
            {location.pathname === '/movies' && (
                <button type='button' className={`movie-card__button movie-card__button${0 ? '_type_saved' : ''}`} >Сохранить</button>
            )}
            {location.pathname === '/saved-movies' && (
                <button type='button' className='movie-card__button movie-card__button_type_delete'></button>
            )
            }
        </li >
    )
}