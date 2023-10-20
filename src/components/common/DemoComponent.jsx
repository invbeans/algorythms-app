import './DemoComponent.css'

export default function DemoComponent({ children, header, info }) {
    return (
        <div className="container-demo">
            <h1 className="h1-demo">{header}</h1>
            <div className='children-demo'>
                {children}
            </div>
            <p className='difficulty-line'>Time: {info.time} | Space: {info.space}</p>
        </div>
    )
}