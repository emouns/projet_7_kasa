import './Rating.scss'

function Rating({ rating }) {
  const total = 5
  const note = parseInt(rating)
  return (
    <div className="rating">
      {Array.from({ length: total }, (_, i) => (
        <span key={i} className={`rating__star ${i < note ? 'rating__star--active' : ''}`}>
          ★
        </span>
      ))}
    </div>
  )
}

export default Rating