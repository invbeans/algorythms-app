import './AlgorythmTypeButton.css'
import { Link } from 'react-router-dom';

export default function AlgorythmTypeButton({ nameOfType, pageLink }) {
    return (
        <Link to={`/${pageLink}`} >
            <button className='button-main'>
                {nameOfType}
            </button>
        </Link>
    )
}