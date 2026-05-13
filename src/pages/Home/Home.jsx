import logements from '../../data/logements.json'
import Card from '../../components/Card/Card'
import Banner from '../../components/Banner/Banner'
import './Home.scss'

function Home() {
  return (
    <div className="home">
      <Banner />
      <section className="home__gallery">
        {logements.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </section>
    </div>
  )
}

export default Home