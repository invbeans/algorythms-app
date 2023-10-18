import { useEffect, useState } from 'react';
import './ElementComponent.css';
import { useSelector } from 'react-redux';

export default function ElementComponent({ number, index }) {
    let activeIndexes = useSelector((state) => state.search.activeIndexes);
    let [className, setClassName] = useState('element-search normal');

    useEffect(() => {
        setClassName(activeIndexes.includes(index) ? 'element-search active' : 'element-search normal');
    }, [activeIndexes])
    return (
        <div className={className}>
            {number}
        </div>
    )
}