import { useEffect, useState } from 'react'
import api from 'axios'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Header from '../components/Header'

import img1 from '../assets/carousel/1.png'
import img2 from '../assets/carousel/2.png'
import img3 from '../assets/carousel/3.png'
import img4 from '../assets/carousel/4.png'
import img5 from '../assets/carousel/5.png'
import img6 from '../assets/carousel/6.png'
import img7 from '../assets/carousel/7.png'

import insta01 from '../assets/instagram/foto1.jpg'
import insta02 from '../assets/instagram/foto2.jpg'
import insta03 from '../assets/instagram/foto3.jpg'
import insta04 from '../assets/instagram/foto4.jpg'
import insta05 from '../assets/instagram/foto5.jpg'
import insta06 from '../assets/instagram/foto6.jpg'

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

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  const settingsInstagram = {
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: 'center',
    centerMode: true,
    centerPadding: '60px',
    responsive: [
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
    ]
  }

const Landing: React.FC = () => {

  return (
    <>
      <Header />
      <Banner>
        <div>
          <Logo />
          <Slider {...settings}>
            <img src={img1} alt="Banner" />
            <img src={img2} alt="Banner" />
            <img src={img3} alt="Banner" />
            <img src={img4} alt="Banner" />
            <img src={img5} alt="Banner" />
            <img src={img6} alt="Banner" />
            <img src={img7} alt="Banner" />
          </Slider>
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
          <Slider {...settingsInstagram}>
            <img src={insta01} alt="postes do instagram" />
            <img src={insta02} alt="postes do instagram" />
            <img src={insta03} alt="postes do instagram" />
            <img src={insta04} alt="postes do instagram" />
            <img src={insta05} alt="postes do instagram" />
            <img src={insta06} alt="postes do instagram" />
          </Slider>
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
