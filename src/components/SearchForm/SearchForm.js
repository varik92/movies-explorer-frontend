import './SearchForm.css';
import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

export default function SearchForm({ handleSearch, checked, handleCheckbox, inputSearch }) {
    const [isSearchMessageActive, setSearchMessageActive] = React.useState(false);
    const [search, setSearch] = React.useState();

    React.useEffect(() => {
        setSearch(inputSearch);
    }, [inputSearch]);

    function handleSubmit(e) {
        e.preventDefault();

        if (!search) {
            setSearchMessageActive(true);
            return
        }
        handleSearch(search);
    }

    function handleChange(e) {
        const value = e.target.value;
        setSearch(value);
        if (value.length !== 0) {
            setSearchMessageActive(false);
        } else {
            setSearchMessageActive(true);
        }
    };

    return (
        <section className='search'>
            <p className={`search__message ${isSearchMessageActive ? 'search__message_active' : ''}`} >
                Нужно ввести ключевое слово
            </p>
            <div className='search__container'>
                <form action='#' noValidate className='search__form' onSubmit={handleSubmit} >
                    <input className='search__input' placeholder='Фильм' type='text' value={search} onChange={handleChange} required />
                    <button type='submit' className='search__button'></button>
                </form>
                <FilterCheckbox checked={checked} handleCheckbox={handleCheckbox} />
            </div>
        </section>
    );
}
