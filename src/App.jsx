import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Logement from './pages/Logement/Logement'
import Error404 from './pages/Error404/Error404'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout est parent de toutes les routes → Header et Footer s'affichent partout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* :id est dynamique → correspond à l'id du logement dans le JSON */}
          <Route path="/logement/:id" element={<Logement />} />
          {/* Attrape toutes les URLs inconnues → redirige vers 404 */}
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
