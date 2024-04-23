import styled from 'styled-components'

export const Card = styled('div')`
  cursor: pointer;
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: all 0.3s linear !important;
  height: 233px;
  p {
    font-family: Inter;
    font-size: 40px;
    font-weight: 700;
    line-height: 50px;
    position: absolute;
    z-index: 100;
    color: #fbda00;
  }
  img {
    width: 100%;
    height: 100%;
  }

  &:hover {
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.8));
  }

  @media (max-width: 1000px) {
    p {
      font-size: 20px;
    }
  }
`
