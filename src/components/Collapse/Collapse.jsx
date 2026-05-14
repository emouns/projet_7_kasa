import { useState } from 'react'
import './Collapse.scss'

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="collapse">
      {/* Clic sur l'en-tête → bascule entre ouvert et fermé */}
      <button
        className="collapse__header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="collapse__title">{title}</span>
        {/* La flèche tourne via CSS quand --open est présent */}
        <span className={`collapse__arrow ${isOpen ? 'collapse__arrow--open' : ''}`}>
          ▲
        </span>
      </button>

      {isOpen && (
        <div className="collapse__content">
          {/* Si content est un tableau → liste à puces, sinon simple texte */}
          {Array.isArray(content) ? (
            <ul className="collapse__list">
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  )
}

export default Collapse
