import './DemoComponent.css'

export default function DemoComponent({ children, info }) {
    return (
        <div className="container-demo">
            <h1 className="h1-demo">Demo (main block of alg page (should be common))</h1>
            <div className='children-demo'>
                {children}
            </div>
            <p>Time: {info.time} | Space: {info.space}</p>
        </div>
    )
}