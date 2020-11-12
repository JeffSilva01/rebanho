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
    width: 100%;
    max-width: 1120px;
    margin: auto;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    > svg {
      margin-top: 40px;
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
    padding: 80px 0;

    > svg {
      width: 540px;

      & + svg {
        height: 620px;
        margin-top: auto;
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
    }

    > div {
      width: 500px;
      margin-left: auto;
      margin-top: 150px;
      padding: 10px;
      background-color: var(--primary);

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
    height: 768px;
    margin: auto;
    margin-top: 100px;

    div {
      display: flex;
      align-items: center;
      margin-top: 80px;

      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 256px;

        :nth-child(2) {
          width: 350px;
          margin: 0 50px;
        }
      }
    }
  }
`
export const ContainerEnd = styled.div`
  background: url(${containerEnd}) no-repeat;
  background-position: center top;
`

export const Contact = styled.div`
  width: 100%;
  max-width: 1120px;

  margin: auto;

  > form {
    width: 400px;
    margin-left: auto;

    > svg {
      margin-top: 150px;
      margin-bottom: 86px;
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
