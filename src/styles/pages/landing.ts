import styled from 'styled-components'

import cowImg from '../../assets/cow.jpg'
import curved from '../../assets/border-curved.png'
import galery from '../../assets/galery.png'
import containerEnd from '../../assets/containerEnd.png'
import footer from '../../assets/footer.png'

export const Banner = styled.div`
  width: 100%;
  margin: 45px 0;

  > div {
    width: 90%;
    max-width: 1120px;
    margin: auto;

    > svg {
      margin: 40px auto;
      width: 100%;
    }
  }
`

export const WhoWeAre = styled.section`
  background: var(--secondary) url(${curved}) no-repeat;
  background-size: max-width 1300px;
  background-position-x: center;

  > div {
    width: 100%;
    max-width: 1120px;
    margin: auto;
    padding: 125px 0;

    display: flex;
    align-items: flex-end;
    justify-content: space-around;

    > svg {
      width: 40%;
      height: auto;
    }

    @media (max-width: 425px) {
      flex-direction: column;
      align-items: center;

      > svg {
        width: 90%;

        & + svg {
          margin-top: 50px;
        }
      }
    }
  }
`

export const Catalogs = styled.section`
  > div {
    background: url(${cowImg}) no-repeat;
    background-position: bottom;
    background-position-x: 0;
    background-size: 587px 515px;

    width: 100%;
    max-width: 1120px;
    margin: auto;
    padding: 80px 0;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    position: relative;

    svg {
      width: 80%;
      max-width: 350px;
    }

    > ul {
      position: absolute;
      right: 100px;
      top: 80px;
      list-style: none;

      li {
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 36px;
        line-height: 46px;

        :before {
          content: '•';
          color: var(--primary);
          margin-right: 30px;
        }
      }

      @media (max-width: 768px) {
        display: none;
      }
    }

    > div {
      width: 90%;
      max-width: 500px;
      margin-left: auto;
      margin-top: 150px;
      padding: 10px;
      background-color: var(--primary);

      @media (max-width: 768px) {
        margin: auto;
        margin: 100px;
      }

      h1 {
        text-align: center;
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 34px;
      }

      ul {
        margin-top: 10px;
        list-style: none;
        display: grid;
        grid-template-columns: auto auto;
        grid-template-rows: auto auto auto;
      }

      li {
        height: 40px;
        margin: 3px;
        background-color: var(--secondary);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--white);
      }
    }
  }
`

export const Gallery = styled.section`
  background: url(${galery}) no-repeat;
  background-position: center bottom;

  > div {
    width: 100%;
    max-width: 1120px;
    margin: auto;

    svg {
      width: 90%;
      height: auto;
      margin: 5%;
    }

    img {
      padding: 10px;
    }
  }
`
export const ContainerEnd = styled.div`
  background: url(${containerEnd}) no-repeat;
  background-position: center top;

  @media (max-width: 424px) {
    background-position: left top;
    background-size: 185%;
  }
`

export const Contact = styled.div`
  width: 100%;
  max-width: 1120px;

  margin: auto;

  > form {
    width: 90%;
    max-width: 400px;
    margin-left: auto;

    @media (max-width: 425px) {
      margin: auto;
      padding-top: 380px;
    }

    > svg {
      margin-top: 150px;
      margin-bottom: 86px;

      @media (max-width: 425px) {
        display: none;
      }
    }

    h1 {
      color: var(--secondary);
    }

    input {
      width: 100%;
      height: 40px;
      color: #fff;
      margin-top: 5px;
      background-color: var(--secondary);
      text-align: center;

      ::placeholder {
        color: #fff;
      }

      :focus::-webkit-input-placeholder {
        color: transparent;
      }
      :focus:-moz-placeholder {
        /* Firefox 18- */
        color: transparent;
      }
      :focus::-moz-placeholder {
        /* Firefox 19+ */
        color: transparent;
      }
      :focus:-ms-input-placeholder {
        color: transparent;
      }
    }

    textarea {
      width: 100%;
      height: 300px;
      color: #fff;
      margin-top: 5px;
      margin-bottom: 5px;
      background-color: var(--secondary);

      text-align: center;

      resize: none;

      ::placeholder {
        color: #fff;
      }

      :focus::-webkit-input-placeholder {
        color: transparent;
      }
      :focus:-moz-placeholder {
        /* Firefox 18- */
        color: transparent;
      }
      :focus::-moz-placeholder {
        /* Firefox 19+ */
        color: transparent;
      }
      :focus:-ms-input-placeholder {
        color: transparent;
      }
    }

    button {
      width: 60px;
      height: 40px;
      color: #fff;
      background-color: var(--primary);
      margin-left: auto;
    }
  }
`

export const Footer = styled.div`
  background: url(${footer}) no-repeat;
  background-position: center bottom;

  width: 100%;
  height: 750px;
  max-width: 1336px;
  margin: auto;

  display: flex;
  align-items: center;
  flex-direction: column;

  color: var(--secondary);

  > svg {
    margin-top: 100px;
    margin-bottom: 95px;
  }

  > p {
    font-size: 16px;
    line-height: 26px;
  }

  > div {
    display: flex;
    align-items: center;

    > * {
      margin: 0 15px;
    }

    > a {
      margin-bottom: 25px;
    }
  }
`
