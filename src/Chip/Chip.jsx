import "./Chip.css";

const Chip = ({text}) => {
    return (
        <div >
          <button className="chip-btn"> {text}</button>
        </div>

    );
}
export default Chip;