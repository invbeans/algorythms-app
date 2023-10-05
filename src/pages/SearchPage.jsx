import DemoComponent from '../components/common/DemoComponent'
import DescriptionComponent from '../components/common/DescriptionComponent'
import CanvasComponent from '../components/search-page/CanvasComponent'
import './SearchPage.css';

const characteristics = {
    time: 'O(n)',
    space: 'O(n)'
}

export default function SearchPage() {
    return (
        <div className="container-search">
            <h1 className='h1-search'>Search page</h1>
            <DemoComponent characteristics={characteristics}>
                <DescriptionComponent description={'there should be description of algorythm'}></DescriptionComponent>
                <CanvasComponent></CanvasComponent>
            </DemoComponent>
        </div>
    )
}