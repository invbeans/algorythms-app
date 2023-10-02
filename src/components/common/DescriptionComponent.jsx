import './DescriptionComponent.css'

export default function DescriptionComponent({description}) {
    return (
        <div className="description-container">
            <p>{description}</p>
        </div>
    )
}