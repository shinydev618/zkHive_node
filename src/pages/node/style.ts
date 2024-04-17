import styled from "@emotion/styled";

export const Home = styled("section")`
  width: 100%;
  min-height: 100vh;
  background-color: #000000;
  padding-top: 186px;
  h2 {
    font-family: Inter;
    font-size: 60px;
    font-weight: 700;
    line-height: 80px;
    text-align: center;
    color: #fbda00;
  }

  .item-4 {
    position: relative;
  }
  .item-4 .img-1 {
    position: absolute;
    left: -20px;
    top: -35px;
  }

  .item-4 .img-2 {
    position: absolute;
    right: -20px;
    bottom: -65px;
  }
`;

export const Grid = styled("div")`
  display: grid;
  margin-top: 36px;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 0px;
  height: 100%;
  gap: 24px;
  #item-0 {
    grid-row-start: 1;
    grid-column-start: 1;
    grid-row-end: 2;
    grid-column-end: 2;
  }
  #item-1 {
    grid-row-start: 1;
    grid-column-start: 2;
    grid-row-end: 3;
    grid-column-end: 3;
  }
  #item-2 {
    grid-row-start: 2;
    grid-column-start: 1;
    grid-row-end: 3;
    grid-column-end: 2;
  }
  #item-3 {
    grid-row-start: 3;
    grid-column-start: 1;
    grid-row-end: 5;
    grid-column-end: 3;
  }
  #item-4 {
    grid-row-start: 3;
    grid-column-start: 3;
    grid-row-end: 4;
    grid-column-end: 4;
  }
  #item-5 {
    grid-row-start: 3;
    grid-column-start: 4;
    grid-row-end: 4;
    grid-column-end: 5;
  }
  #item-6 {
    grid-row-start: 4;
    grid-column-start: 3;
    grid-row-end: 5;
    grid-column-end: 5;
  }
  #item-7 {
    grid-row-start: 1;
    grid-column-start: 3;
    grid-row-end: 3;
    grid-column-end: 5;
  }

  @media (max-width: 1000px) {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 10px;
    height: 100%;
    h2 {
      font-size: 40px !important;
    }
    #item-0 {
      grid-row-start: 1;
      grid-column-start: 1;

      grid-row-end: 2;
      grid-column-end: 3;
    }
    #item-1 {
      grid-row-start: 2;
      grid-column-start: 1;

      grid-row-end: 3;
      grid-column-end: 3;
    }
    #item-2 {
      grid-row-start: 3;
      grid-column-start: 1;

      grid-row-end: 4;
      grid-column-end: 3;
    }
    #item-3 {
      grid-row-start: 4;
      grid-column-start: 1;

      grid-row-end: 5;
      grid-column-end: 3;
    }
    #item-4 {
      grid-row-start: 1;
      grid-column-start: 3;

      grid-row-end: 2;
      grid-column-end: 5;
    }
    #item-5 {
      grid-row-start: 2;
      grid-column-start: 3;

      grid-row-end: 3;
      grid-column-end: 5;
    }
    #item-6 {
      grid-row-start: 3;
      grid-column-start: 3;

      grid-row-end: 4;
      grid-column-end: 5;
    }
    #item-7 {
      grid-row-start: 4;
      grid-column-start: 3;
      grid-row-end: 5;
      grid-column-end: 5;
    }
  }

  @media (max-width: 750px) {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    height: 100%;
    h2 {
      font-size: 30px !important;
    }
    #item-0 {
      grid-row-start: 1;
      grid-column-start: 1;

      grid-row-end: 2;
      grid-column-end: 3;
    }
    #item-1 {
      grid-row-start: 2;
      grid-column-start: 1;

      grid-row-end: 3;
      grid-column-end: 3;
    }
    #item-2 {
      grid-row-start: 3;
      grid-column-start: 1;

      grid-row-end: 4;
      grid-column-end: 3;
    }
    #item-3 {
      grid-row-start: 4;
      grid-column-start: 1;

      grid-row-end: 5;
      grid-column-end: 3;
    }
    #item-4 {
      grid-row-start: 5;
      grid-column-start: 1;

      grid-row-end: 6;
      grid-column-end: 3;
    }
    #item-5 {
      grid-row-start: 6;
      grid-column-start: 1;

      grid-row-end: 7;
      grid-column-end: 3;
    }
    #item-6 {
      grid-row-start: 7;
      grid-column-start: 1;

      grid-row-end: 8;
      grid-column-end: 3;
    }
    #item-7 {
      grid-row-start: 8;
      grid-column-start: 1;

      grid-row-end: 9;
      grid-column-end: 3;
    }
  }

  .item-4 .img-1 {
    width: 20%;
  }
  .item-4 .img-2 {
    width: 20%;
    right: -12px;
    bottom: -25px;
  }

  .active_status {
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
    color: #08f02d;
  }
  .active_status_flag {
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
    color: #fbda00;
  }
`;
