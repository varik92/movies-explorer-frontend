import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

export default function SearchForm() {

    return (
        <section className='search'>
            <div className='search__container'>
                <form action='#' noValidate className='search__form'>
                    <input className='search__input' placeholder='Фильм' />
                    <button type='submit' className='search__button'></button>
                </form>
                <FilterCheckbox />
            </div>
        </section>
    );
}
