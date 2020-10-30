import Header from '../components/Header'
import Carousel from '../components/Carousel'

import Logo from '../assets/logo.svg'
// import BorderCurved from '../assets/border-curved.svg'
import WhoWeAreImg from '../assets/who-we-are.svg'
import MissionEyesightValuesImg from '../assets/mission-eyesight-values.svg'
import AnimalNutritionImg from '../assets/animal-nutrition.svg'

import { Banner, WhoWeAre, Catalogs } from '../styles/pages/landing'

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
              <li>catalogo</li>
              <li>catalogo</li>
            </ul>
          </div>
        </div>
      </Catalogs>
    </>
  )
}

export default Landing
