import './Tags.scss'

function Tags({ tags }) {
  return (
    <ul className="tags">
      {tags.map((tag, index) => (
        <li key={index} className="tags__item">{tag}</li>
      ))}
    </ul>
  )
}

export default Tags
