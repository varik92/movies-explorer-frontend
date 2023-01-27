import './FilterCheckbox.css';

export default function FilterCheckbox({ handleCheckbox, checked, checkedSaveMovies }) {

    return (
        <div className='checkbox__container'>
            <p className='checkbox__title'>Короткометражки</p>
            <div className='checkbox'>
                <input
                    type='checkbox'
                    id='checkbox'
                    className='checkbox__input'
                    checked={checked}
                    onChange={handleCheckbox}
                />
                <div className='checkbox__toggle'></div>
                <label className='checkbox' htmlFor='checkbox'></label>
            </div>
        </div>

    );
}
