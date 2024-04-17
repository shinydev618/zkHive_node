import styled from "styled-components";

export const Header = styled("header")`
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
  z-index: 999;
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
      color: #fbda00;
      z-index: 10;
    }
    ul {
      display: flex;
      align-items: center;
      gap: 21px;
      li {
        list-style: none;
        a {
          font-family: Inter;
          font-size: 20px;
          font-weight: 400;
          line-height: 30px;
        }
        button {
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
        }
      }
    }
  }

  @media (max-width: 1000px) {
    max-width: 100%;
    top: 0px;
    nav {
      /* padding: 0px 10px 0px 4px; */
      padding: 0px 2rem;
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
      min-height: 100vh;
      flex-direction: column;
      width: 100%;
      align-items: center;
      justify-content: center;
      background: #545433;
      top: -15px;
      transition: all 0.3s linear;
    }

    nav ul.active {
      left: 0;
    }
  }
`;
