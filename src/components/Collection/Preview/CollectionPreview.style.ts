import styled from 'styled-components';

export const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
  `,
  Title: styled.h1`
    cursor: pointer;
    font-size: 28px;
    margin-bottom: 25px;

    &:hover {
      color: grey;
    }
  `,
  Preview: styled.div`
    display: flex;
    justify-content: space-between;
  `,
};
