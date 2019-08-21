import React from 'react';

import { InputChangeHandler } from 'types';

import { S } from './Input.style';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  handleChange: InputChangeHandler;
  label?: string;
}

export const Input: React.FC<Props> = ({ handleChange, label, ...rest }) => (
  <S.Group>
    <S.Input onChange={handleChange} {...rest} />
    {label ? <S.Label shrink={!!rest.value}>{label}</S.Label> : null}
  </S.Group>
);

Input.defaultProps = {
  type: 'text',
};
