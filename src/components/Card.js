import './Card.css'
import cardsData from './CardData';
import { Link } from 'react-router-dom';
function Cards() {
  return (
    
    <main>
       {cardsData.map((card, index) => (
        <div className="Cards" key={index}>
          <img src={card.img} alt={card.title} />
          <h3>{card.title}</h3>
           <Link to={`/movie/${card.id}`}>
            <button>{card.button}</button>
          </Link>
        </div>
      ))}
    </main>
  );
}

export default Cards;



