import styled from 'styled-components'

export const CongratulationsUI = styled('div')`
  max-width: 835px;
  margin: auto;
  h1 {
    font-family: Inter;
    font-size: 50px !important;
    font-weight: 700;
    line-height: 60px;
    text-align: center;
    color: #08f02d !important;
    margin-bottom: 0 !important;
  }

  .hr {
    height: 2px;
    margin: 40px 0;
  }

  .text_1 {
    font-family: Inter;
    font-size: 34px;
    font-weight: 600;
    line-height: 46px;
    text-align: center;
    color: #ffffff;
  }

  .text_2 {
    font-family: Inter;
    font-size: 24px;
    font-weight: 500;
    line-height: 34px;
    text-align: center;
    color: #ffffff;
  }

  .btn {
    margin: 40px auto;
    /* width: 100%; */
    position: relative;
    border: none;
    background: transparent;
    outline: none;
    color: #fbda00;
    font-family: Inter;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 15px 119px;
    img {
      position: absolute;
      width: 100%;
    }
    span {
      position: absolute;
      z-index: 100;
      color: black;
    }
  }
  @media (max-width: 1000px) {
    padding: 0 1rem;
  }
  @media (max-width: 500px) {
    padding: 0 1rem;
    .text_1 {
      font-size: 30px;
    }
    .text_2 {
      font-size: 20px;
    }
  }
`
