import Banner from '../../components/Banner/Banner'
import Collapse from '../../components/Collapse/Collapse'
import './About.scss'

// Données des valeurs Kasa déclarées hors du composant (elles ne changent jamais)
const aboutData = [
  {
    title: 'Fiabilité',
    content: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'
  },
  {
    title: 'Respect',
    content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de mauvaise foi fera l'objet de sanctions."
  },
  {
    title: 'Service',
    content: 'Nos équipes se tiennent disponibles pour vous permettre de mener à bien votre projet locatif.'
  },
  {
    title: 'Sécurité',
    content: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos équipes.'
  }
]

function About() {
  return (
    <div className="about">
      <Banner page="about" />
      <div className="about__collapses">
        {aboutData.map((item, index) => (
          <Collapse
            key={index}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </div>
  )
}

export default About
