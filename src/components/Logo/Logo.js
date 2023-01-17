import './Logo.css';
import { Link } from 'react-router-dom';

export default function Logo({ greeting }) {
    return (
        <div className='logo-container'>
            <Link to='/' className='logo' />
            <h2 className='logo-greeting'>{greeting}</h2>
        </div>
    )
}
