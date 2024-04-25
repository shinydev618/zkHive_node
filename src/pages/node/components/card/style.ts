import styled from 'styled-components'

export const Card = styled('div')`
  height: 100%;
  width: 100%;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 29px 0;
  position: relative;
  h1 {
    font-family: Inter;
    font-size: 30px;
    font-weight: 800;
    line-height: 50px;
    text-align: center;
    color: #fbda00;
  }
  p {
    font-family: Inter;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    text-align: center;
    color: #ffffff;
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .content {
    z-index: 100;
  }

  .claim_button {
    width: 100%;
    padding: 30px 0;
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
    img {
      position: absolute;
    }
    span {
      position: absolute;
      z-index: 100;
      color: black;
    }
  }

  .button_wrapper {
    position: absolute;
    bottom: 30px;
    margin: auto;
    width: 50%;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (max-width: 1000px) {
    .button_wrapper {
      position: static;
      margin-left: 50%;
      margin-top: 2rem;
    }

    .content {
      h1 {
        font-size: 30px;
      }
      p {
        font-size: 18px;
      }
    }
  }
`
