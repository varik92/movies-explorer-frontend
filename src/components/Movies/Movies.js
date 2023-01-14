import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';

export default function Movies() {
    return (
        <>
            <main className='movies'>
                <SearchForm />
                {0 ? (
                    <Preloader />
                ) : (
                    <MoviesCardList />
                )}
            </main>

            <Footer />
        </>
    )
}