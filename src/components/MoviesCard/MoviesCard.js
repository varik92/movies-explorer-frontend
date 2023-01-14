import './MoviesCard.css';

export default function MoviesCard({ movieCard }) {

    return (
        <li className='movie-card'>
            <div className='movie-card__text-content'>
                <h2 className='movie-card__title'>{movieCard.nameRU}</h2>
                <p className='movie-card__duration'>{movieCard.duration} минут</p>
            </div>
            <img src={movieCard.image} alt={movieCard.nameRU} className='movie-card__image' />
            <button type='button' className={`movie-card__button movie-card__button${0 ? '_active' : ''}`} >Сохранить</button>
        </li>
    )
}