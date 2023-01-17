import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import img from '../../images/movieImage.jpg'

export default function MoviesCardList({ /* moviesCards ,*/ }) {
    const moviesCards = [
        {
            id: 1,
            duration: 27,
            nameRU: 'В погоне за',
            image: img,
        }, {
            id: 2,
            duration: 27,
            nameRU: 'В погоне за',
            image: img,
        }, {
            id: 3,
            duration: 27,
            nameRU: 'В погоне за',
            image: img,
        }, {
            id: 4,
            duration: 27,
            nameRU: 'В погоне за',
            image: img,
        }, {
            id: 5,
            duration: 27,
            nameRU: 'В погоне за',
            image: img,
        }, {
            id: 6,
            duration: 27,
            nameRU: 'В погоне за',
            image: img,
        }, {
            id: 7,
            duration: 27,
            nameRU: 'В погоне за',
            image: img,
        }, {
            id: 8,
            duration: 27,
            nameRU: 'В погоне за',
            image: img,
        }, {
            id: 9,
            duration: 27,
            nameRU: 'В погоне за',
            image: img,
        }, {
            id: 10,
            duration: 27,
            nameRU: 'В погоне за',
            image: img,
        }, {
            id: 11,
            duration: 27,
            nameRU: 'В погоне за',
            image: img,
        }, {
            id: 12,
            duration: 27,
            nameRU: 'В погоне за',
            image: img,
        },
    ]
    return (
        <section className='movies-cards'>
            <ul className='movies-cards__list'>
                {moviesCards.map((card) => (
                    <MoviesCard key={card.id} movieCard={card} />
                ))}
            </ul>

            {0 ? (
                <Preloader />
            ) : (

                <div className='movies-cards__btn-container'>
                    <button className='movies-cards__btn-more' type='button' name='loadMore' >Ещё</button>
                </div>

            )}
        </section>
    );
};
