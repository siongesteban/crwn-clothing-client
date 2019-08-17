import React from 'react';
import classNames from 'classnames';

import { InputChangeHandler } from '../../../types';

import './input.style.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  handleChange: InputChangeHandler;
  label?: string;
}

export const Input: React.FC<InputProps> = ({
  handleChange,
  label,
  ...rest
}) => (
  <div className="group">
    <input className="input" onChange={handleChange} {...rest} />
    {label ? (
      <label className={classNames({ shrink: !!rest.value }, 'label')}>
        {label}
      </label>
    ) : null}
  </div>
);

Input.defaultProps = {
  type: 'text',
};
