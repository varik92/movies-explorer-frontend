import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header'

export default function SavedMovies() {
    return (
        <><Header />
            <div className="saved-movies">
                <SearchForm />
                <MoviesCardList />
            </div>
            <Footer />
        </>
    );
};
