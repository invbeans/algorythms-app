import './CanvasComponent.css';
import { useState } from 'react';

export default function CanvasComponent() {
    const [number, setNumber] = useState('');

    const handleInput = (event) => {
        setNumber(event.target.value);
    }

    return (
        <div className="container-canvas">
            <h1 className="h1-canvas">Canvas</h1>
            <input type='number' value={number} onChange={handleInput} placeholder='Введите число для поиска'></input>
        </div>
    )
}