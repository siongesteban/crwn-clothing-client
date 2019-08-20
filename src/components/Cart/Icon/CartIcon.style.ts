import styled from 'styled-components';

import { ReactComponent as BagIcon } from 'assets/crwn_clothing_shopping_bag_icon.svg';

export const S = {
  Wrapper: styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  `,
  BagIcon: styled(BagIcon)`
    width: 24px;
    height: 24px;
  `,
  ItemCount: styled.span`
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
  `,
};
