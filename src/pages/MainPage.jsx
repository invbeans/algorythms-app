import BackgroundComponent from "../components/main-page/BackgroundComponent"
import AlgorythmTypeButton from "../components/main-page/AlgorythmTypeButton"
import './MainPage.css';

export default function MainPage() {
    return (
        <BackgroundComponent>
            <div className="grid-main">
                <h1 className="h1-main">Визуализация алгоритмов сортировки и поиска</h1>
                <AlgorythmTypeButton nameOfType="Сортировка" pageLink="sort"></AlgorythmTypeButton>
                <AlgorythmTypeButton nameOfType="Поиск" pageLink="search"></AlgorythmTypeButton>
            </div>
            {/* <div className="page-footer"></div> */}
        </BackgroundComponent>
    )
}