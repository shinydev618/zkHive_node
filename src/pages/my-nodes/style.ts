import styled from '@emotion/styled'

export const Wrapper = styled('section')`
  width: 100%;
  min-height: 100vh;
  background-color: black;
  padding-top: 195px;
  .content {
    width: 100%;
    h1 {
      text-align: center;
      font-family: Inter;
      font-size: 60px;
      font-weight: 700;
      line-height: 80px;
      color: #fbda00;
    }
  }

  .add-btn {
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 233px;
    img {
      height: 233px;
    }
  }

  .see_more {
    margin-top: 60px;
    border: none;
    padding: 0 20px;
    outline: none;
    cursor: pointer;
    background: transparent;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-family: Inter;
      font-size: 24px;
      font-weight: 700;
      line-height: 34px;
      text-align: center;
      color: #000000;
      position: absolute;
      z-index: 100;
    }
    img {
      width: 100%;
    }
  }

  @media (max-width: 1000px) {
    padding: 8rem 1rem;

    .see_more {
      padding: 0 4rem;
      p {
        font-size: 16px;
      }
    }
    .content {
      h1 {
        font-size: 30px;
      }
    }
  }

  @media (max-width: 750px) {
    .see_more {
      padding: 0 1rem;
    }
  }
`

export const NodeGrid = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
  height: 100%;
  margin-top: 60px;
  padding: 0 20px;
  img {
    width: 100%;
  }
  .content {
    position: absolute;
    z-index: 100;
    color: black;
    p {
      font-family: Inter;
      font-size: 30px;
      font-weight: 700;
      line-height: 40px;
      text-align: center;
      margin-top: 20px;
    }
  }

  @media (max-width: 1000px) {
    & {
      grid-template-columns: 1fr 1fr;
      padding: 0 4rem;
    }

    .add-btn {
      p {
        font-size: 20px;
      }
      .content {
        .add_icon {
          width: 60px;
        }
      }
    }
  }

  @media (max-width: 750px) {
    & {
      margin-top: 1rem;
      grid-template-columns: 1fr;
      padding: 0 1rem;
    }
  }
`
