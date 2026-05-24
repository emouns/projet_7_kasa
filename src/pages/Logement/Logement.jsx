import { useParams, Navigate } from 'react-router-dom'
import logements from '../../data/logements.json'
import Carousel from '../../components/Carousel/Carousel'
import Rating from '../../components/Rating/Rating'
import Tags from '../../components/Tags/Tags'
import Collapse from '../../components/Collapse/Collapse'
import './Logement.scss'

function Logement() {  // pas de props//
 
  const { id } = useParams()   //lit l'id directement dans l'URL  ex: /logement/abc123 donne { id: "abc123" }
  const logement = logements.find((l) => l.id === id) //cherche dans le json//

  // Si l'ID n'existe pas dans le JSON → page 404
  if (!logement) {
    return <Navigate to="/404" replace />
  }

  return (
    <div className="logement">
      <Carousel pictures={logement.pictures} />

      <div className="logement__header">
        <div className="logement__info">
          <h1 className="logement__title">{logement.title}</h1>
          <p className="logement__location">{logement.location}</p>
          <Tags tags={logement.tags} />
        </div>
        <div className="logement__host">
          <div className="logement__host-info">
            <p className="logement__host-name">{logement.host.name}</p>
            <img
              src={logement.host.picture}
              alt={logement.host.name}
              className="logement__host-img"
            />
          </div>
          <Rating rating={logement.rating} />
        </div>
      </div>

      <div className="logement__collapses">
        <Collapse title="Description" content={logement.description} />
        {/* equipments est un tableau → Collapse affichera une liste à puces */}
        <Collapse title="Équipements" content={logement.equipments} />
      </div>
    </div>
  )
}

export default Logement
