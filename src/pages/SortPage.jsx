import DemoComponent from '../components/common/DemoComponent'
import DescriptionComponent from '../components/common/DescriptionComponent'
import CanvasComponent from '../components/sort-page/CanvasComponent'
import ChooseComponent from '../components/sort-page/ChooseComponent'
import ElementComponent from '../components/sort-page/ElementComponent'
import info from '../algorithms-info/sorting/algorithmsInfo';
import './SortPage.css'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BUBBLE_SORT, QUICK_SORT, initArray, sortStep } from '../slices/sortSlice';

export default function SortPage() {
    let sortArray = useSelector((state) => state.sort.array);
    let isDone = useSelector((state) => state.sort.doneSorting);
    const dispatch = useDispatch();
    let [sortAlgorithm, setSortAlgorithm] = useState(BUBBLE_SORT);
    let [sortInfo, setSortInfo] = useState(info.find(elem => elem.key === sortAlgorithm));

    useEffect(() => {
        dispatch(initArray());
    }, [sortAlgorithm, dispatch])

    useEffect(() => {
        let interval = setInterval(() => {
            if (!isDone) {
                dispatch(sortStep(sortAlgorithm))
            }
        }, 300)
        return () => clearInterval(interval);
    }, [sortAlgorithm, isDone, dispatch])

    function handleChooseClick(sortKey) {
        setSortInfo(info.find(elem => elem.key === sortKey));
        setSortAlgorithm(sortKey);
    }

    return (
        <div className="container-sort">
            <div className="container-choose">
                {info.map(algorithmInfo => {
                    return <ChooseComponent algorithmInfo={algorithmInfo} onChooseClick={handleChooseClick} key={algorithmInfo.key}></ChooseComponent>
                })}
            </div>
            <DemoComponent info={sortInfo}>
                <DescriptionComponent description={sortInfo.description}></DescriptionComponent>
                <CanvasComponent>
                    {sortArray.map(num => {
                        return <ElementComponent number={num} key={num}></ElementComponent>
                    })}
                </CanvasComponent>
            </DemoComponent>
        </div>
    )
}