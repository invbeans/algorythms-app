import DemoComponent from '../components/common/DemoComponent'
import DescriptionComponent from '../components/common/DescriptionComponent'
import CanvasComponent from '../components/sort-page/CanvasComponent'
import ChooseComponent from '../components/sort-page/ChooseComponent'
import ElementComponent from '../components/sort-page/ElementComponent'
import info from '../algorithms-info/sorting/algorithmsInfo';
import './SortPage.css'
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { BUBBLE_SORT, initArray, sortStep } from '../slices/sortSlice';

const characteristics = {
    time: 'O(n)',
    space: 'O(n)'
}

export default function SortPage() {
    let sortArray = useSelector((state) => state.sort.array);
    let isDone = useSelector((state) => state.sort.doneSorting);
    const dispatch = useDispatch();

    //not sure if it will work correctly when ill change algorithm
    useEffect(() => {
        dispatch(initArray());
        console.log(sortArray);
    }, [])

    useEffect(() => {
        let interval = setInterval(() => {
            if(!isDone) {
                dispatch(sortStep(BUBBLE_SORT))
            }
        }, 500)
        return () => clearInterval(interval);
    }, [isDone, dispatch])

    return (
        <div className="container-sort">
            {/* <h1 className='h1-sort'>Sort page</h1> */}
            <ChooseComponent algorithmsInfo={info}></ChooseComponent>
            <DemoComponent characteristics={characteristics}>
                <DescriptionComponent description={'there should be description of algorythm'}></DescriptionComponent>
                <CanvasComponent>
                    {sortArray.map(num => {
                        return <ElementComponent number={num} key={num}></ElementComponent>
                    })}
                </CanvasComponent>
            </DemoComponent>
        </div>
    )
}