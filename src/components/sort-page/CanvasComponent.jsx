import './CanvasComponent.css';

export default function CanvasComponent({children}) {
    return (
        <div className="container-canvas">
            {children}
        </div>
    )
}