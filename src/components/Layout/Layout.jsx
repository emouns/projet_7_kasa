import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Layout.scss'

function Layout() {
  return (
    <div className="layout">
      <Header />
      {/* Outlet = emplacement où s'affiche la page active (Home, About, etc.) */}
      <main className="layout__main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
