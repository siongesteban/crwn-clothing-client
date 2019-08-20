import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

const ImageWrapper = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    height: 100%;
    width: 100%;
  }
`;

const Text = styled.span`
  width: 23%;
`;

const QuantityWrapper = styled(Text)`
  display: flex;

  span {
    margin: 0 10px;
  }
  div {
    cursor: pointer;
  }
`;

const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;

export const S = {
  Wrapper,
  ImageWrapper,
  Text,
  QuantityWrapper,
  RemoveButton,
};
