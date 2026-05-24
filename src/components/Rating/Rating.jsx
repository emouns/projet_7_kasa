import './Rating.scss'

function Rating({ rating }) {  //props//
  const total = 5
  const note = parseInt(rating) // le JSON renvoie parfois une string, on force en nombre

  return (
    <div className="rating">
      {/* Génère 5 étoiles, colorie en rouge celles dont le numéro est sous la note */}
      {Array.from({ length: total }, (_, i) => (
        <span key={i} className={`rating__star ${i < note ? 'rating__star--active' : ''}`}>
          ★
        </span>
      ))}
    </div>
  )
}

export default Rating
