import './Card.css'

function Card({icon: Icon, title, info}) {
    return (
        <div className="card">
            <Icon
                size={40}           
                color="#3b82f6"    
                strokeWidth={1.5}   
            />
            <h3 className='card-title'>{title}</h3>
            <p className='card-info'>{info}</p>
        </div>
    );
}
export default Card;