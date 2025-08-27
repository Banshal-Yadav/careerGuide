import './Card.css'

function Card({icon, title, info}) {
    return (
        <div className="card">
            <h2>{icon}</h2>
            <h3>{title}</h3>
            <p>{info}</p>
        </div>
    );
}
export default Card;