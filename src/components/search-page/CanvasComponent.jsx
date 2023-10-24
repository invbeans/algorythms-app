import './CanvasComponent.css';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function CanvasComponent({ children, onResetClick, onStartClick }) {
    const [number, setNumber] = useState(0);
    let isFound = useSelector((state) => state.search.isFound);
    let [resultString, setResultString] = useState('Число не найдено');

    useEffect(() => {
        setResultString(isFound ? 'Число найдено' : 'Число не найдено');
        console.log(isFound);
    }, [isFound])

    const handleInput = (event) => {
        setNumber(event.target.value);
    }

    return (
        <div className="container-canvas-search">
            <div className="search-array-container">
                {children}
            </div>
            <p>{resultString}</p>
            <div className="inputs-and-info-search">
                <button className='buttons-search' onClick={onResetClick}>Обновить массив</button>
                <input className='input-search' type='number' value={number} onChange={handleInput} placeholder='Введите число для поиска' />
                <button className='buttons-search' onClick={() => onStartClick(number)}>Начать</button>
            </div>
        </div>
    )
}