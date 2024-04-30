import styled from 'styled-components'

export const Checked = styled('div')`
  width: 100%;
  .checked_title_wrapper h1 {
    font-family: Inter;
    font-size: 30px;
    font-weight: 700;
    line-height: 40px;
    text-align: left;
    color: #fbda00;
    margin-bottom: 0 !important;
    margin-top: 60px;
  }

  .checked_grid_buttons {
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
    }
  }

  @media (max-width: 1000px) {
    & {
      display: flex;
      flex-direction: column;
      gap: 4rem;
      padding: 3rem 4rem;
      margin-top: 2rem;
    }
    .checked_grid_buttons {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .checked_title_wrapper h1 {
      margin-top: 20px;
      font-size: 30px !important;
      text-align: center;
    }
  }

  @media (max-width: 790px) {
    & {
      gap: 3rem;
      padding: 3rem 1rem;
    }

    .checked_title_wrapper h1 {
      margin-top: 20px;
    }
  }
`
