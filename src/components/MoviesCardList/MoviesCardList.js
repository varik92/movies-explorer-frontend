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
