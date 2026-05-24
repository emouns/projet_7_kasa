import { Link } from 'react-router-dom'
import './Card.scss'

function Card({ logement }) { //props//
  return (
    // Toute la carte est cliquable → redirige vers la page du logement
    <Link to={`/logement/${logement.id}`} className="card">
      <img src={logement.cover} alt={logement.title} className="card__img" />
      <div className="card__overlay">
        <p className="card__title">{logement.title}</p>
      </div>
    </Link>
  )
}

export default Card
