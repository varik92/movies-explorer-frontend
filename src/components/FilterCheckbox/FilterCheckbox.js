import './FilterCheckbox.css';

export default function FilterCheckbox({ onCheckbox, checked, checkedSaveMovies }) {
    const handleCheckbox = (evt) => {
        onCheckbox(evt.target.checked);
    };
    return (<>
        <p className='checkbox__title'>Короткометражки</p>
        <div className='checkbox'>
            <input
                type='checkbox'
                id='checkbox'
                className='checkbox__input'
                defaultChecked='true'
            />
            <div className='checkbox__toggle'></div>
            <label className='checkbox' htmlFor='checkbox'></label>
        </div></>
        /*         <div className="mylabel">
        
                    <input type="checkbox" id="gameplay" />
                    <div className="slidinggroove"></div>
                    <label className="mylabel" htmlFor="gameplay" ></label>
                </div> */
    );
}
