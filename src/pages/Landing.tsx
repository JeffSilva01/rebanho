import { useEffect, useState } from 'react'
import api from 'axios'

import Header from '../components/Header'
import Carousel from '../components/Carousel'

import Logo from '../assets/logo.svg'
import WhoWeAreImg from '../assets/who-we-are.svg'
import MissionEyesightValuesImg from '../assets/mission-eyesight-values.svg'
import AnimalNutritionImg from '../assets/animal-nutrition.svg'
import Nuvens from '../assets/nuvens.svg'
import Message from '../assets/message.svg'
import FaceFooter from '../assets/faceFooter.svg'
import InstaFooter from '../assets/instaFooter.svg'

import {
  Banner,
  WhoWeAre,
  Catalogs,
  Gallery,
  Contact,
  ContainerEnd,
  Footer
} from '../styles/pages/landing'

const Landing: React.FC = () => {
  const [urlInstagram, setUrlInstagram] = useState([])

  useEffect(() => {
    async function getImagesInstagram() {
      const { data } = await api.get(
        'https://www.instagram.com/rebanhosa/?__a=1'
      )

      setUrlInstagram([
        data.graphql.user.edge_owner_to_timeline_media.edges[0].node
          .display_url,
        data.graphql.user.edge_owner_to_timeline_media.edges[1].node
          .display_url,
        data.graphql.user.edge_owner_to_timeline_media.edges[2].node.display_url
      ])
    }

    getImagesInstagram()
  }, [])

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
            <img src={urlInstagram[1]} alt="postes do instagram" />
            <img src={urlInstagram[0]} alt="postes do instagram" />
            <img src={urlInstagram[2]} alt="postes do instagram" />
          </div>
        </div>
      </Gallery>
      <ContainerEnd>
        <Contact>
          <form>
            <Message />
            <h1>Fale conosco</h1>
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="E-mail" />
            <input type="text" placeholder="Whatsapp" />
            <textarea placeholder="Escreva sua mensagem" />
            <button type="submit">Enviar</button>
          </form>
        </Contact>
        <Footer>
          <Logo />
          <p>Siga nossas redes</p>
          <div>
            <a href="" target="_blank" rel="noreferrer">
              <FaceFooter />
            </a>
            <a
              href="https://www.instagram.com/rebanhosa"
              target="_blank"
              rel="noreferrer"
            >
              <InstaFooter />
            </a>
          </div>

          <p>Rebanho Soluções Agropecuárias</p>
          <div>
            <p>(85) 3231.9248</p>
            <p>Rodovia BR - 116, 9748, Barroso</p>
          </div>
          <div>
            <p>(85) 99697.2626</p>
            <p>CEP: 60862-764 - Fortaleza|CE</p>
          </div>
        </Footer>
      </ContainerEnd>
    </>
  )
}

export default Landing
