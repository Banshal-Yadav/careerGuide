import Chip from './Chip.jsx';
import './Chiptab.css';

const Chiptab = ({c1, c2, c3, c4, c5, c6}) => {
    return (
        <div className='chip-tab'>
            <Chip text={c1} />
            <Chip text={c2} />
            <Chip text={c3} />
            <Chip text={c4} />
            <Chip text={c5} />
            <Chip text={c6} />
        </div>
    );
}

export default Chiptab;