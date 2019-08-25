import styled from 'styled-components';

export const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Title: styled.h2`
    font-size: 38px;
    margin: 0 auto 30px;
  `,
  Items: styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;

    & > div {
      margin-bottom: 30px;
    }

    @media screen and (max-width: 800px) {
      grid-template-columns: 1fr 1fr;
      grid-gap: 15px;
    }
  `,
};
