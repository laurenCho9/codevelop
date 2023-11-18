import { theme } from 'src/globalLayout/GlobalStyle';
import { styled } from 'styled-components';

export const MainWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
`;

export const StartCodeReviewBox = styled.div`
  background-color: ${theme.color.point};
  width: 414px;
  height: 109px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  margin: 80px auto 0;
  cursor: pointer;
  overflow: hidden;
  a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.color.bgc1};
    font-family: Pretendard;
    font-size: 32px;
    font-weight: 700;
    letter-spacing: -0.5px;
  }
`;

export const MainSearchContainer = styled.div`
  width: 631px;
  margin: 80px auto 0;
  display: flex;
  flex-direction: column;
`;
export const MainSearchList = styled.ul`
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;
export const MainSearchItem = styled.li`
  color: ${theme.color.grey5};
  font-size: 20px;
  font-weight: 200;
  line-height: 140%;
  letter-spacing: -0.5px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  &.active {
    color: ${theme.color.grey1};
    font-size: 20px;
    font-weight: 700;
    letter-spacing: -0.5px;
    &::after {
      content: '';
      width: 100%;
      height: 2px;
      background-color: ${theme.color.grey1};
    }
  }
`;
export const MainSearchBox = styled.div`
  display: flex;
  width: 100%;
  margin: 12px auto 20px;
  form {
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
    svg {
      position: absolute;
      left: 40px;
      width: 30px;
      height: 45px;
      flex-shrink: 0;
      background-color: ${theme.color.point};
    }
    label {
      display: flex;
      width: 100%;
      input {
        padding: 12px 40px 12px 80px;
        box-sizing: border-box;
        width: 100%;
        height: 69px;
        background-color: ${theme.color.point};
        border-radius: 999px;
        border: none;
        font-size: 20px;
        font-weight: 700;
        letter-spacing: -0.5px;
        color: ${theme.color.bgc1};
        &:-moz-selection {
          background-color: ${theme.color.bgc1};
          color: ${theme.color.point};
        }
        &::selection {
          background-color: ${theme.color.bgc1};
          color: ${theme.color.point};
        }
        &:focus {
          outline-color: ${theme.color.sub3};
        }
        &::placeholder {
          color: ${theme.color.sub3};
        }
      }
    }
    button {
      position: absolute;
      right: 40px;
      border: none;
      cursor: pointer;
      background-color: ${theme.color.point};
      text-align: center;
      font-size: 32px;
      font-weight: 700;
      letter-spacing: -0.5px;
      color: ${theme.color.sub3};
      transition: all ease-in-out 0.15s;
      &:hover {
        color: ${theme.color.bgc1};
      }
    }
  }
`;

export const BestTechStackBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  h3 {
    color: ${theme.color.grey1};
    font-size: 20px;
    font-weight: 700;
    line-height: 140%;
    letter-spacing: -0.5px;
    padding-bottom: 4px;
    border-bottom: 0.5px solid ${theme.color.grey4};
  }
`;

export const BestTechStackList = styled.ul`
  margin: 0 auto;
  width: 580px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
`;
export const BestTechStackItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  cursor: pointer;
  div {
    width: 80px;
    height: 80px;
    border-radius: 80px;
    border: 0.5px solid ${theme.color.grey4};
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    img {
      width: 80%;
    }
  }
  span {
    color: ${theme.color.grey1};
    text-align: center;
    font-size: 16px;
    font-weight: 200;
    line-height: 140%;
    letter-spacing: -0.5px;
  }
`;

export const MainCardsContainer = styled.div`
  margin-top: 80px;
  width: 100%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  gap: 40px;
  article {
    & > div {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      h3 {
        color: ${theme.color.grey1};
        font-size: 20px;
        font-weight: 700;
        line-height: 140%;
        letter-spacing: -0.5px;
        span {
          color: ${theme.color.point};
          color: var(--, #29cc61);
          font-family: Pretendard;
          font-size: 20px;
          font-style: normal;
          font-weight: 700;
          line-height: 140%;
          letter-spacing: -0.5px;
        }
      }
      .more {
        color: ${theme.color.grey4};
        font-size: 20px;
        font-weight: 200;
        line-height: 140%;
        letter-spacing: -0.5px;
      }
    }
    ul {
      margin-top: 20px;
      width: 1280px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      /* column-gap: 43.5px; */
      column-gap: 50px;
      row-gap: 40px;
    }
  }
`;
