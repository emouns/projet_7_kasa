import { useState } from 'react'
import './Carousel.scss'

function Carousel({ pictures }) {
  // index = numéro de la photo affichée en ce moment
  const [index, setIndex] = useState(0) // React détecte le changement et re-affiche automatiquement la bonne photo

  // si je suis sur photo 0    → je vais à la dernière
  const handlePrev = () => {
    setIndex(index === 0 ? pictures.length - 1 : index - 1) // sinon je recule d'une photo
  }

  // si je suis sur la dernière je reviens à 0
  const handleNext = () => {
    setIndex(index === pictures.length - 1 ? 0 : index + 1) /// sinon j'avance d'une photo
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
