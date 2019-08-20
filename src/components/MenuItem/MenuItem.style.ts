import styled from 'styled-components';

import { Item, Section } from 'types';

export const S = {
  Wrapper: styled.div`
    height: ${({ size }: { size: Section['size'] }) =>
      size ? '380px' : '240px'};
    min-width: 30%;
    overflow: hidden;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    overflow: hidden;

    &:hover {
      cursor: pointer;

      &:nth-child(1) {
        transform: scale(1.1);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      }

      &:nth-child(2) {
        opacity: 0.9;
      }
    }
    &:first-child {
      margin-right: 7.5px;
    }
    &:last-child {
      margin-left: 7.5px;
    }
  `,

  BGImage: styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: ${({ imageURL }: { imageURL: Item['imageURL'] }) =>
      `url(${imageURL})`};
  `,

  Content: styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: white;
    opacity: 0.7;
    position: absolute;
  `,

  Title: styled.span`
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: #4a4a4a;
  `,

  Subtitle: styled.span`
    font-weight: lighter;
    font-size: 16px;
  `,
};
