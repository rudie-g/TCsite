import Card from '../Card'
import Ticker from './Ticker'

function Info() {
    return (
        <div className='Info'>
            <Ticker />
            <br />
            <Card />
            <Embed />
        </div>
    )
}

export default Info;