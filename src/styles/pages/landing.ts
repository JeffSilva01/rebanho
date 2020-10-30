import styled from 'styled-components'

import cowImg from '../../assets/cow.jpg'

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
  width: 100vw;
  background-color: var(--secondary);

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
