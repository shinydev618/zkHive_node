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

    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

    gap: 0px;
    height: 100%;

    #item-0 {
      grid-row-start: 1;
      grid-column-start: 1;

      grid-row-end: 2;
      grid-column-end: 2;
    }
    #item-0 {
      grid-row-start: 1;
      grid-column-start: 1;

      grid-row-end: 2;
      grid-column-end: 2;
    }
    #item-1 {
      grid-row-start: 2;
      grid-column-start: 1;

      grid-row-end: 3;
      grid-column-end: 4;
    }
    #item-2 {
      grid-row-start: 3;
      grid-column-start: 1;

      grid-row-end: 4;
      grid-column-end: 4;
    }
    #item-3 {
      grid-row-start: 4;
      grid-column-start: 1;

      grid-row-end: 5;
      grid-column-end: 2;
    }
    #item-4 {
      grid-row-start: 4;
      grid-column-start: 2;

      grid-row-end: 5;
      grid-column-end: 3;
    }
    #item-5 {
      grid-row-start: 1;
      grid-column-start: 2;

      grid-row-end: 2;
      grid-column-end: 3;
    }
    #item-6 {
      grid-row-start: 1;
      grid-column-start: 3;

      grid-row-end: 2;
      grid-column-end: 4;
    }
    #item-7 {
      grid-row-start: 4;
      grid-column-start: 3;

      grid-row-end: 5;
      grid-column-end: 4;
    }
    #item-8 {
      grid-row-start: 5;
      grid-column-start: 1;

      grid-row-end: 6;
      grid-column-end: 4;
    }

    .item-4 {
      position: relative;
    }
  }
`;
