import styled from "styled-components";

export const PricePlans = styled("div")`
  width: 100%;
  .price_title_wrapper h1 {
    font-family: Inter;
    font-size: 30px;
    font-weight: 700;
    line-height: 40px;
    text-align: left;
    color: #fbda00;
  }

  .price_grid_buttons {
    width: 100%;
    display: grid;
    column-gap: 32px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin-top: 50px;
    /* margin-top: 15px; */
    button {
      width: 100%;
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
      }
    }

    .compare_plans {
      font-family: Inter;
      font-size: 24px;
      font-weight: 700;
      line-height: 34px;
      text-align: left;
      color: #fbda00;
    }
  }

  .price_grid_cards {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: 32px;
    margin-top: 55px;
  }

  @media (max-width: 1000px) {
    .price_title_wrapper h1 {
      font-size: 26px;
      text-align: center;
    }

    .price_grid_buttons {
      display: grid;
      grid-template-rows: 1fr 1fr 1fr 1fr;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 242px;
      height: 100%;
      margin-top: 9rem;
      padding: 0 1rem;
    }

    #item-0 {
      grid-row-start: 1;
      grid-column-start: 1;

      grid-row-end: 2;
      grid-column-end: 5;
    }
    #item-1 {
      grid-row-start: 2;
      grid-column-start: 1;

      grid-row-end: 3;
      grid-column-end: 5;
    }
    #item-2 {
      grid-row-start: 3;
      grid-column-start: 1;

      grid-row-end: 4;
      grid-column-end: 5;
    }
    #item-3 {
      grid-row-start: 4;
      grid-column-start: 1;
      grid-row-end: 5;
      grid-column-end: 5;
    }

    .compare_plans {
      text-align: center !important;
    }

    .price_grid_cards {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 0 15px;
    }
  }

  @media (max-width: 750px) {
    .price_grid_buttons {
      /* margin-top: 7rem;
      gap: 112px; */
      gap: 152px;
      display: flex;
      flex-direction: column;
      padding-bottom: 5rem;
    }

    #item-3 {
      text-align: center !important;
    }
  }

  @media (max-width: 450px) {
    .price_grid_buttons {
      margin-top: 5rem;
      gap: 120px;
    }
    #item-3 {
      text-align: center;
    }
  }
`;
