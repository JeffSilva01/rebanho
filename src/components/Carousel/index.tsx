import { useRef, useEffect } from 'react'

import { Container, Content, Item } from './styles'

import img1 from '../../assets/carousel/1.png'
import img2 from '../../assets/carousel/2.png'
import img3 from '../../assets/carousel/3.png'
import img4 from '../../assets/carousel/4.png'
import img5 from '../../assets/carousel/5.png'
import img6 from '../../assets/carousel/6.png'
import img7 from '../../assets/carousel/7.png'

const Carousel: React.FC = () => {
  const itemsRef = useRef<HTMLDivElement>(null)

  function handlerBanner() {
    itemsRef.current?.scrollBy({ left: 300, top: 0, behavior: 'smooth' })
    if (itemsRef.current?.scrollLeft === 6720) {
      itemsRef.current?.scrollBy({ left: -6720, top: 0, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const interval = setInterval(handlerBanner, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Container>
      <Content ref={itemsRef}>
        <Item>
          <img src={img1} alt="" />
        </Item>
        <Item>
          <img src={img2} alt="" />
        </Item>
        <Item>
          <img src={img3} alt="" />
        </Item>
        <Item>
          <img src={img4} alt="" />
        </Item>
        <Item>
          <img src={img5} alt="" />
        </Item>
        <Item>
          <img src={img6} alt="" />
        </Item>
        <Item>
          <img src={img7} alt="" />
        </Item>
      </Content>
    </Container>
  )
}

export default Carousel
