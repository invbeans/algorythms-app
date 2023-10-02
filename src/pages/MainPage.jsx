//import { useDispatch, useSelector } from "react-redux"
import BackgroundComponent from "../components/main-page/BackgroundComponent"
import AlgorythmTypeButton from "../components/common/AlgorythmTypeButton"
// import { EXAMPLE, changeValue, increment } from "../slices/example";
// import { useEffect } from "react";
import './MainPage.css';

export default function MainPage() {
    //REMOVE LATER (examples)

    // const val = useSelector((state) => state.example.value);
    // const ready = useSelector((state) => state.example.doneSorting);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     let interval = setInterval(() => {
    //         if(!ready) {
    //             dispatch(increment(EXAMPLE))
    //             console.log(ready)
    //         }
    //     }, 1000);
    //     return () => clearInterval(interval);
    // }, [ready, dispatch])

    // function handleClick() {
    //     dispatch(changeValue(5));
    // }
    /* <span>{val}</span>
    <button onClick={handleClick}>Поменять валью в стейте</button> */

    return (
        <BackgroundComponent>
            <div className="grid-main">
                <h1 className="h1-main">Визуализация алгоритмов сортировки и поиска</h1>
                <AlgorythmTypeButton nameOfType="Сортировка" pageLink="sort"></AlgorythmTypeButton>
                <AlgorythmTypeButton nameOfType="Поиск" pageLink="search"></AlgorythmTypeButton>
            </div>
        </BackgroundComponent>
    )
}