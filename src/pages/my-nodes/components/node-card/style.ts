import styled from "styled-components";

export const Card = styled("div")`
  cursor: pointer;
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
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

  @media (max-width: 1000px) {
    p {
      font-size: 20px;
    }
  }
`;
