import Header from '../components/Header'
import Carousel from '../components/Carousel'

import Logo from '../assets/logo.svg'
// import BorderCurved from '../assets/border-curved.svg'
import WhoWeAreImg from '../assets/who-we-are.svg'
import MissionEyesightValuesImg from '../assets/mission-eyesight-values.svg'
import AnimalNutritionImg from '../assets/animal-nutrition.svg'
import Nuvens from '../assets/nuvens.svg'

import { Banner, WhoWeAre, Catalogs, Gallery } from '../styles/pages/landing'

const Landing: React.FC = () => {
  return (
    <>
      <Header />
      <Banner>
        <div>
          <Logo />
          <Carousel />
        </div>
      </Banner>
      <WhoWeAre>
        <div>
          <WhoWeAreImg />
          <MissionEyesightValuesImg />
        </div>
      </WhoWeAre>
      <Catalogs>
        <div>
          <AnimalNutritionImg />
          <ul>
            <li>Bovinos</li>
            <li>Suínos</li>
            <li>Equinos</li>
            <li>Aves</li>
            <li>Caprinos</li>
            <li>Ovinos</li>
          </ul>

          <div>
            <h1>Mídias digitais</h1>
            <ul>
              <li>catalogo</li>
              <li>catalogo</li>
              <li>catalogo</li>
              <li>catalogo</li>
              <li>catalogo</li>
              <li>catalogo</li>
            </ul>
          </div>
        </div>
      </Catalogs>
      <Gallery>
        <div>
          <Nuvens />
          <div>
            <img
              src="https://instagram.ffor26-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/123406867_283975916165416_1428874556204100761_n.jpg?_nc_ht=instagram.ffor26-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=ObihPl1htHoAX_f89dh&_nc_tp=24&oh=d4d782f7f8c28a8689d321451ea178d2&oe=5FCCC503"
              alt=""
            />
            <img
              src="https://instagram.ffor26-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/123406867_283975916165416_1428874556204100761_n.jpg?_nc_ht=instagram.ffor26-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=ObihPl1htHoAX_f89dh&_nc_tp=24&oh=d4d782f7f8c28a8689d321451ea178d2&oe=5FCCC503"
              alt=""
            />
            <img
              src="https://instagram.ffor26-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/123406867_283975916165416_1428874556204100761_n.jpg?_nc_ht=instagram.ffor26-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=ObihPl1htHoAX_f89dh&_nc_tp=24&oh=d4d782f7f8c28a8689d321451ea178d2&oe=5FCCC503"
              alt=""
            />
          </div>
        </div>
      </Gallery>
    </>
  )
}

export default Landing
