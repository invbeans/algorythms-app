import './BackgroundComponent.css'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ElementComponent from '../../components/sort-page/ElementComponent'
import { initArray, sortStep } from '../../slices/sortSlice';

//i plan to do animation here so it is a seperated component
export default function BackgroundComponent({ children }) {
    let sortArray = useSelector((state) => state.sort.array);
    let isDone = useSelector((state) => state.sort.doneSorting);
    const dispatch = useDispatch();
    let sortAlgorithm = 'BUBBLE_SORT';

    useEffect(() => {
        dispatch(initArray());
    }, [sortAlgorithm, dispatch])

    useEffect(() => {
        let interval = setInterval(() => {
            if (!isDone) {
                dispatch(sortStep(sortAlgorithm));
            }
        }, 300)
        return () => clearInterval(interval);
    }, [sortAlgorithm, isDone, dispatch])

    return (
        <div className="background">
            {children}
            <div className="sort-background">
                {sortArray.map(num => {
                    return <ElementComponent number={num} key={num}></ElementComponent>
                })}
            </div>
        </div>
    )
}