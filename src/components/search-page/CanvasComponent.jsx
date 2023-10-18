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
        <div className="container-canvas">
            <button onClick={onResetClick}>Обновить массив</button>
            <div className="search-array-container">
                {children}
            </div>
            <input type='number' value={number} onChange={handleInput} placeholder='Введите число для поиска' />
            <button onClick={() => onStartClick(number)}>Начать</button>
            <p>{resultString}</p>
        </div>
    )
}