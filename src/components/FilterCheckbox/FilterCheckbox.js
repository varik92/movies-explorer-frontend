import './FilterCheckbox.css';

export default function FilterCheckbox({ onCheckbox, checked, checkedSaveMovies }) {

    return (
        <div className='checkbox__container'>
            <p className='checkbox__title'>Короткометражки</p>
            <div className='checkbox'>
                <input
                    type='checkbox'
                    id='checkbox'
                    className='checkbox__input'
                />
                <div className='checkbox__toggle'></div>
                <label className='checkbox' htmlFor='checkbox'></label>
            </div>
        </div>

    );
}
