import styled from 'styled-components';

export const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;
  `,
  Title: styled.h1`
    margin: 10px 0;
  `,
  Buttons: styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px auto;

    @media screen and (max-width: 800px) {
      flex-direction: column;
      width: unset;
      align-items: center;

      > *:first-child {
        margin-bottom: 50px;
      }
    }
  `,
};
