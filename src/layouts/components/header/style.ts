import styled from 'styled-components'

export const Header = styled('header')`
  min-height: 90px;
  width: 100%;
  background: #363607;
  margin: auto;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 40px;
  border-radius: 8px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  z-index: 9;
  nav {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .menu {
      display: none !important;
      width: 35px;
      height: 35px;
      display: flex;
      flex-direction: column;
      gap: 5px;
      cursor: pointer;
    }
    .menu div {
      width: 100%;
      height: 4px;
      border-radius: 4px;
      background-color: white;
      margin-top: 7px;
    }

    a {
      text-decoration: none;
      font-family: Inter;
      font-size: 30px;
      font-weight: 500;
      line-height: 40px;
      display: flex;
      align-items: center;
      color: white;
      z-index: 10;
      transition: all 0.3s linear;
      img {
        width: 59.04;
      }
    }
    ul {
      display: flex;
      align-items: center;
      gap: 30px;
      li {
        list-style: none;
        a {
          font-family: Inter;
          font-size: 20px;
          font-weight: 400;
          line-height: 30px;

          position: relative;
          &::before {
            content: '';
            width: 0%;
            height: 1px;
            background: #fbda00;
            bottom: -12px;
            position: absolute;
            transition: all 0.3s linear;
          }
          &:hover {
            color: #fbda00;
          }
          &:hover::before {
            width: 100%;
          }
        }
        div {
        }
        /* button {
          padding: 8px 21px 8px 21px;
          gap: 20px;
          border-radius: 8px;
          outline: none;
          border: none;
          font-family: Inter;
          font-size: 20px;
          font-weight: 500;
          line-height: 30px;
          background-color: #fbda00;
        } */
      }
    }
  }

  .btn1 {
    /* width: 100%; */
    width: 244px;
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
      width: 100%;
    }
    span {
      position: absolute;
      z-index: 100;
      color: black;
    }
  }

  @media (max-width: 1000px) {
    max-width: 100%;
    top: 0px;
    padding: 10px 4rem;
    padding-right: calc(4rem + 15px);
    nav {
      .menu {
        display: block !important;
        z-index: 30;
      }
    }
    nav ul {
      position: fixed;
      padding-left: 0px;
      top: 0;
      left: -100%;
      min-height: 110vh;
      flex-direction: column;
      width: 100%;
      align-items: start;
      justify-content: start;
      background: #545433;
      top: -15px;
      transition: all 0.3s linear;
      padding-left: 1.5rem;
      padding-top: 10rem;
    }

    nav ul.active {
      left: 0;
    }
    .btn1 {
      margin-top: 10px;
    }
  }

  @media (max-width: 750px) {
    padding: 10px 1rem;
  }
`
