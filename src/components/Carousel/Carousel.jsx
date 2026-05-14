import { useState } from 'react'
import './Carousel.scss'

function Carousel({ pictures }) {
  // index = numéro de la photo affichée en ce moment
  const [index, setIndex] = useState(0)

  // Boucle en arrière : si on est sur la 1ère photo on revient à la dernière
  const handlePrev = () => {
    setIndex(index === 0 ? pictures.length - 1 : index - 1)
  }

  // Boucle en avant : si on est sur la dernière on revient à la 1ère
  const handleNext = () => {
    setIndex(index === pictures.length - 1 ? 0 : index + 1)
  }

  return (
    <div className="carousel">
      <img src={pictures[index]} alt={`Photo ${index + 1}`} className="carousel__img" />
      {/* Flèches et compteur masqués s'il n'y a qu'une seule photo */}
      {pictures.length > 1 && (
        <>
          <button className="carousel__btn carousel__btn--prev" onClick={handlePrev}>&#10094;</button>
          <button className="carousel__btn carousel__btn--next" onClick={handleNext}>&#10095;</button>
          <span className="carousel__counter">{index + 1} / {pictures.length}</span>
        </>
      )}
    </div>
  )
}

export default Carousel
