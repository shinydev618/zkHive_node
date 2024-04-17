import styled from "styled-components";

export const Card = styled("div")`
  /* border: 3px solid #545433; */
  height: 100%;
  width: 100%;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 29px 0;
  position: relative;
  h1 {
    font-family: Inter;
    font-size: 40px;
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
`;
