import './Card.css'

function Card({icon: Icon, title, info, className=""}) {
    return (
        <div className={`card ${className}`}>
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