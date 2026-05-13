import { useState } from 'react'
import './Carousel.scss'

function Carousel({ pictures }) {
  const [index, setIndex] = useState(0)

  const handlePrev = () => {
    setIndex(index === 0 ? pictures.length - 1 : index - 1)
  }

  const handleNext = () => {
    setIndex(index === pictures.length - 1 ? 0 : index + 1)
  }

  return (
    <div className="carousel">
      <img src={pictures[index]} alt={`Photo ${index + 1}`} className="carousel__img" />
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