import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';
import Header from '../Header/Header'

export default function Movies() {
    return (
        <>
            <Header />
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