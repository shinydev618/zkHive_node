import styled from "styled-components";

export const BuyNodes = styled("section")`
  width: 100%;
  min-height: 100vh;
  background-color: black;
  padding-top: 195px;

  .content {
    h1 {
      font-family: Inter;
      font-size: 60px;
      font-weight: 700;
      line-height: 80px;
      text-align: center;
      color: #fbda00;
      margin-bottom: 71px;
    }
  }

  .step_content_wrapper {
    width: 100%;
    display: flex;
    gap: 10px;
    flex-direction: column;
  }

  .prices {
  }

  @media (max-width: 700px) {
    & {
      padding-top: 110px;
    }
    .content h1 {
      font-size: 40px;
      margin-bottom: 40px;
    }
  }
`;
