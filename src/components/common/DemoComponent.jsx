import './DemoComponent.css'

export default function DemoComponent({ children, characteristics }) {
    return (
        <div className="container-demo">
            <h1 className="h1-demo">Demo (main block of alg page (should be common))</h1>
            <div className='children-demo'>
                {children}
            </div>
            <p>Time: {characteristics.time} | Space: {characteristics.space}</p>
        </div>
    )
}