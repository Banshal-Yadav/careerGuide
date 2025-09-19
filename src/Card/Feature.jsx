import Cardtab from './Cardtab.jsx'
import CtaBanner from '../CtaBanner/CtaBanner.jsx';
import './feature.css';

function Feature() {
    return (
        <div className='feature'>
            <h1 className='feature-title'>Features</h1>
            <Cardtab />
            <CtaBanner />
        </div>
    );
}

export default Feature;