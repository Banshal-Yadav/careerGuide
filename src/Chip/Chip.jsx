import "./Chip.css";

const Chip = ({text, onClick}) => { // add onClick prop
    return (
        <div >
          {/* pass the text to the onClick handler */}
          <button className="chip-btn" onClick={() => onClick(text)}> 
            {text}
          </button>
        </div>
    );
}
export default Chip;