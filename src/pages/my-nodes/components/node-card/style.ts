import styled from "styled-components";

export const Card = styled("div")`
  cursor: pointer;
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
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

  transition: all 0.3s !important;
  &:hover {
      filter: drop-shadow(0 0 15px #fbda00);
  }

  @media (max-width: 1023px) {
    p {
      font-size: 20px;
    }
    height: 200px;
  }

  @media (max-width: 768px) {
    height: 150px;
  }
`;
