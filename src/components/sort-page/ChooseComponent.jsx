import './ChooseComponent.css'

export default function ChooseComponent({ algorithmInfo, onChooseClick }) {
    return (
        <div className='element-choose' key={algorithmInfo.key} onClick={() => onChooseClick(algorithmInfo.key)}>
            <p>{algorithmInfo.name}</p>
        </div>
    )
}