import './BackgroundComponent.css'

//i plan to do animation here so it is a seperated component
export default function BackgroundComponent({children}) {
    return (
        <div className="background">
            {children}
        </div>
    )
}