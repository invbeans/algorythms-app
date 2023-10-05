import './ElementComponent.css';

export default function ElementComponent({number}) {
    const hue = (number / 50) * 360;

    return (
        <div 
            className="element-sort"
            style={{'--hue': hue}}
        >
            {number}
        </div>
    )
}