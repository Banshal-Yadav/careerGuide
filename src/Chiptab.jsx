import Chip from './Chip.jsx';
import './Chiptab.css';

const Chiptab = () => {
    return (
        <div className='chip-tab'>
            <Chip text="Ai" />
            <Chip text="Frontend" />
            <Chip text="Java Devloper" />
            <Chip text="Researcher" />
            <Chip text="Cloud" />
            <Chip text="Bigdata" />
        </div>
    );
}

export default Chiptab;