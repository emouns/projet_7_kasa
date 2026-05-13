import './Banner.scss'
import homeBanner from '../../assets/Image_source_1.png'
import aboutBanner from '../../assets/_Section 1.png'

function Banner({ page }) {
  const bgImage = page === 'about' ? aboutBanner : homeBanner

  return (
    <div
      className={`banner ${page === 'about' ? 'banner--about' : ''}`}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {page !== 'about' && (
        <p className="banner__text">Chez vous, partout et ailleurs</p>
      )}
    </div>
  )
}

export default Banner
