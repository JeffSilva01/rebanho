import styled from 'styled-components'

interface Props {
  backgroundColor?: string
}

export const Container = styled.div`
  width: 100%;
  height: 45px;

  display: flex;
  justify-content: center;

  background-image: linear-gradient(to right, var(--secondary), var(--primary));

  position: fixed;
  z-index: 1;
`

export const Content = styled.div`
  width: 100%;
  max-width: 1120px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
  }
`

export const ButtonHouse = styled.a`
  width: 35px;
  height: 35px;

  margin-top: 40px;
  margin-left: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--secondary);

  > svg {
    width: 25px;
  }
`

export const ButtonMenu = styled.a<Props>`
  width: 170px;
  height: 35px;
  margin-top: 40px;

  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  line-height: 35px;

  color: var(--primary);
  background-color: ${props => props.backgroundColor};
`
