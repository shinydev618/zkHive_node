import styled from 'styled-components'

export const PriceCard = styled('div')`
  border: 3px #363607 solid;
  padding: 24px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: min-content;
  transition: all 0.3s linear !important;
  &:hover {
    border-color: #fbda00;
    background-color: #1d1d03;
  }
  h2 {
    font-family: Inter;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    text-align: center;
    color: #fbda00;
    margin: 12px 0;
  }

  hr {
    width: 100%;
    height: 3px;
    background: #979797;
  }
  p {
    font-family: Inter;
    font-size: 16px;
    font-weight: 700;
    line-height: 26px;
    text-align: center;
    color: #fff;
    margin: 12px 0;
  }
  img {
    text-align: center;
  }
  ul {
    padding-bottom: 4rem;
  }
  ul li {
    margin: 8px 0;
    display: flex;
    align-items: center;
    column-gap: 4px;
  }
  ul li span {
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 26px;
    text-align: center;
    color: #979797;
    margin-left: 10px;
  }

  button {
    padding: 9px 71px;
    font-family: Inter;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    text-align: center;
    color: #fbda00;
    background: transparent;
    border: 2px solid #fbda00;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 5px;
    transition: all 0.3s linear;
    position: absolute;
    bottom: 24px;
  }
  button:hover {
    background: #fbda00 !important;
    color: black;
  }

  @media (max-width: 1000px) {
    & {
      display: none;
    }
    &.active {
      display: block !important;
    }
  }
`
