import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const S: { [key: string]: any } = {};

const OptionContainerStyles = css`
  cursor: pointer;
  padding: 10px 15px;
`;

S.Header = styled.div`
  display: flex;
  height: 70px;
  justify-content: space-between;
  margin-bottom: 25px;
  width: 100%;
`;

S.Logo = styled(Link)`
  height: 100%;
  padding: 25px;
  width: 70px;
`;

S.Options = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: flex-end;
  width: 50%;
`;

S.OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;

S.OptionDiv = styled.div`
  ${OptionContainerStyles}
`;

export { S };
