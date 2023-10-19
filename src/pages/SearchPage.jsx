import { useDispatch, useSelector } from 'react-redux';
import DemoComponent from '../components/common/DemoComponent'
import DescriptionComponent from '../components/common/DescriptionComponent'
import CanvasComponent from '../components/search-page/CanvasComponent'
import ChooseComponent from '../components/search-page/ChooseComponent';
import ElementComponent from '../components/search-page/ElementComponent';
import './SearchPage.css';
import { useEffect, useRef, useState } from 'react';
import { LINEAR_SEARCH, BINARY_SEARCH, JUMP_SEARCH, initArray, setNumberToSearch, searchStep } from '../slices/searchSlice';
import info from '../algorithms-info/searching/algorithmsInfo';

export default function SearchPage() {
    let searchArray = useSelector((state) => state.search.array);
    let numberToSearch = useSelector((state) => state.search.numberToSearch);
    let isDone = useSelector((state) => state.search.doneSearching);
    let [startSearching, setStartSearching] = useState(true);
    let [resetArray, setResetArray] = useState(true);
    const dispatch = useDispatch();
    const isSearchEffect = useRef(false);
    let [searchAlgorithm, setSearchAlgorithm] = useState(LINEAR_SEARCH);
    let [searchInfo, setSearchInfo] = useState(info.find(elem => elem.key === searchAlgorithm));

    useEffect(() => {
        dispatch(initArray());
        isSearchEffect.current = false;
    }, [searchAlgorithm, resetArray, dispatch])

    useEffect(() => {
        if (isSearchEffect.current) {
            let interval = setInterval(() => {
                if (!isDone) {
                    dispatch(searchStep(searchAlgorithm));
                }
            }, 300)
            return () => clearInterval(interval);
        } else {
            isSearchEffect.current = true;
        }
    }, [numberToSearch, searchAlgorithm, isDone, dispatch])

    function handleChooseClick(searchKey) {
        setSearchInfo(info.find(elem => elem.key === searchKey));
        setSearchAlgorithm(searchKey);
    }

    function handleStartClick(number) {
        dispatch(setNumberToSearch(number));
        setStartSearching(!startSearching);
    }

    function handleResetClick() {
        setResetArray(!resetArray);
    }

    return (
        <div className="container-search">
            <div className="container-choose">
                {info.map(algorithmInfo => {
                    return <ChooseComponent algorithmInfo={algorithmInfo} onChooseClick={handleChooseClick} key={algorithmInfo.key}></ChooseComponent>
                })}
            </div>
            <DemoComponent info={searchInfo}>
                <DescriptionComponent description={searchInfo.description}></DescriptionComponent>
                <CanvasComponent onResetClick={handleResetClick} onStartClick={handleStartClick}>
                    {searchArray.map((num, index) => {
                        return <ElementComponent number={num} index={index} key={num}></ElementComponent>
                    })}
                </CanvasComponent>
            </DemoComponent>
        </div>

    )
}