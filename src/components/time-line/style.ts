import styled from "@emotion/styled";

export const TimeLine = styled("div")`
  display: flex;
  gap: 60px;
  .time_line {
    gap: 85px;
  }
  .step {
    display: flex;
    gap: 32px;
    align-items: center;
    .count {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 5;
      img {
        /* position: absolute; */
        width: 100%;
      }
      p {
        position: absolute;
        color: #000000;
        z-index: 100;
      }
    }
  }
  .step p {
    font-family: Inter;
    font-size: 30px;
    font-weight: 700;
    line-height: 40px;
    color: #fbda00;
  }

  .time_line {
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 1;
    gap: 110px;
    .line {
      position: absolute;
      top: 2px;
      right: 31px;
      width: 6px;
      height: 95%;
      background-color: #fbda00;
    }
  }
  .last {
    margin-top: 7rem !important;
  }
`;
