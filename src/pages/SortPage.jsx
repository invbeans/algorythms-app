import DemoComponent from '../components/common/DemoComponent'
import DescriptionComponent from '../components/common/DescriptionComponent'
import CanvasComponent from '../components/sort-page/CanvasComponent'
import './SortPage.css'

const characteristics = {
    time: 'O(n)',
    memory: 'O(n)'
}

export default function SortPage() {
    return (
        <div className="container-sort">
            <h1 className='h1-sort'>Sort page</h1>
            <DemoComponent characteristics={characteristics}>
                <DescriptionComponent description={'there should be description of algorythm'}></DescriptionComponent>
                <CanvasComponent></CanvasComponent>
            </DemoComponent>
        </div>
    )
}