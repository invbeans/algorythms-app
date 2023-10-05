import './ChooseComponent.css'

export default function ChooseComponent({ algorithmsInfo }) {   
    return (
        <div className="container-choose">
            {algorithmsInfo.map((elem) => {
                return (
                    <div className='element-choose'>
                        <p>{elem.name}</p>
                    </div>
                )
            })}
        </div>
    )
}