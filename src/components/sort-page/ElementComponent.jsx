import './ElementComponent.css';

export default function ElementComponent({number}) {
    const saturation = (number / 50) * 100;

    return (
        <div 
            className="element-sort"
            style={{'--saturation': saturation+'%'}}
        >
            {number}
        </div>
    )
}