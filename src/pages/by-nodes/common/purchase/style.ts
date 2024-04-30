import styled from '@emotion/styled'

export const PurchaseUI = styled('div')`
  width: 100%;
  margin-top: 9rem;
  .purchase_title_wrapper h1 {
    font-family: Inter;
    font-size: 30px;
    font-weight: 700;
    line-height: 40px;
    text-align: left;
    color: #fbda00;
    margin-bottom: 0 !important;
    margin-top: 0px;
  }

  .purchase_grid_buttons {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: 32px;
    margin-top: 50px;
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
      padding: 12px 0;
      img {
        position: absolute;
        width: 100%;
      }
      span {
        position: absolute;
        z-index: 100;
        color: black;
      }
      .pay_with_token span {
        color: #fbda00 !important;
      }
    }
  }

  p {
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    text-align: left;
    color: #fff;
    margin-top: 35px;
  }

  @media (max-width: 1000px) {
    & {
      margin-top: 0rem;
      padding: 0 4rem;
    }
    .purchase_grid_buttons {
      display: flex;
    }
    .purchase_title_wrapper h1 {
      margin-top: 0px;
      text-align: center;
      font-size: 30px;
    }

    .last_text {
      text-align: center;
    }
  }

  @media (max-width: 750px) {
    padding: 0 1rem;
  }
`
