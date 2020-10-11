import Logo from '../../assets/logo.svg'
import HoseIcon from '../../assets/house-icon.svg'
// import iconHouse from '../../assets/icon-house.svg'

import { Container, Content, ButtonHouse, ButtonMenu } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <div>
          <Logo />
          <ButtonHouse>
            <HoseIcon />
          </ButtonHouse>
        </div>

        <div>
          <ButtonMenu backgroundColor="#581518">Social</ButtonMenu>
          <ButtonMenu backgroundColor="#8C351B">Atendimento</ButtonMenu>
        </div>
      </Content>
    </Container>
  )
}

export default Header
