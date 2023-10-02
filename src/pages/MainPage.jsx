import { useDispatch, useSelector } from "react-redux"
import { changeValue, increment } from "../slices/example";
import { useEffect } from "react";

export default function MainPage() {
    const val = useSelector((state) => state.example.value);
    const ready = useSelector((state) => state.example.doneSorting);
    const dispatch = useDispatch();

    useEffect(() => {
        let interval = setInterval(() => {
            if(!ready) {
                dispatch(increment())
                console.log(ready)
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [ready, dispatch])

    function handleClick() {
        dispatch(changeValue(5));
    }

    return (
        <div>
            <h1>Main page</h1>
            <span>{val}</span>
            <button onClick={handleClick}>Поменять валью в стейте</button>
        </div>
    )
}