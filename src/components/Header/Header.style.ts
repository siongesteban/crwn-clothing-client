import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const OptionContainerStyles = css`
  cursor: pointer;
  padding: 10px 15px;
`;

const Wrapper = styled.div`
  display: flex;
  height: 70px;
  justify-content: space-between;
  margin-bottom: 25px;
  width: 100%;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

const Logo = styled(Link)`
  height: 100%;
  padding: 25px;
  width: 70px;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`;

const Options = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: flex-end;
  width: 50%;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;

const OptionDiv = styled.div`
  ${OptionContainerStyles}
`;

export const S = {
  Wrapper,
  Logo,
  Options,
  OptionLink,
  OptionDiv,
};
