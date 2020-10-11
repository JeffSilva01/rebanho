import Link from 'next/link'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter
} from 'react-icons/fa'

import SloganImg from '../assets/slogan.svg'

import { Container, Content, LinkSocial } from '../styles/home'

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <nav>
          <LinkSocial href="facebook" background="#2151A7">
            <FaFacebookF size={24} />
          </LinkSocial>
          <LinkSocial href="Tnstagran" background="#000">
            <FaInstagram size={24} />
          </LinkSocial>
          <LinkSocial href="Linkedin" background="#6E87C9">
            <FaLinkedinIn size={24} />
          </LinkSocial>
          <LinkSocial href="Twiter" background="#0F94D8">
            <FaTwitter size={24} />
          </LinkSocial>
        </nav>

        <SloganImg />

        <div>
          <Link href="/Landing">ENTRAR</Link>
          <Link href="https://www.whatsapp.com">WHATSAPP</Link>
        </div>
      </Content>
    </Container>
  )
}

export default Home
