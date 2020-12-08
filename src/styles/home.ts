import styled from 'styled-components'

interface LinkSocialProps {
  background?: string
}

export const Container = styled.div`
  width: 100%;
  height: 100%;

  background-color: var(--primary);
`

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;

  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  > nav {
    display: flex;
    position: absolute;
    top: 100px;
    right: 100px;
    float: right;
  }

  > svg {
    width: 80%;
    max-width: 555px;
  }

  > div {
    width: 480px;

    display: flex;
    justify-content: space-between;

    @media (max-width: 425px) {
      flex-direction: column;
      align-items: center;
    }

    a {
      width: 200px;
      height: 45px;

      text-align: center;

      line-height: 45px;

      color: #fff;
      text-decoration: none;
      font-size: 2.4rem;
      font-weight: 700;

      background-color: var(--secondary);

      & + a {
        background-color: #35b44c;

        @media (max-width: 425px) {
          margin-top: 20px;
        }
      }
    }
  }
`

export const LinkSocial = styled.a<LinkSocialProps>`
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.background};
  color: #fff;
`
