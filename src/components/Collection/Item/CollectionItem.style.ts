import styled from 'styled-components';

import { Button } from 'components';
import { Item } from 'types';

export const S = {
  Wrapper: styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;

    &:hover {
      .image {
        opacity: 0.8;
      }

      button {
        opacity: 0.85;
        display: flex;
      }
    }
  `,
  AddButton: styled(Button)`
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  `,
  BGImage: styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    background-image: ${({ imageURL }: { imageURL: Item['imageURL'] }) =>
      `url(${imageURL})`};
  `,
  Footer: styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
  `,
  Name: styled.span`
    width: 90%;
    margin-bottom: 15px;
  `,
  Price: styled.span`
    width: 10%;
    text-align: right;
  `,
};
