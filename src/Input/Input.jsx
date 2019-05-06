// @flow

import * as React from 'react';

import s from './Input.scss';

type Props = {
  label: string|number,
  value: string|number,
  name: string|number,
  placeholder: string|number,
  onChange: (e: SyntheticEvent<any>) => void,
  onBlur: null|(e: SyntheticEvent<any>) => void,
  disabled: boolean,
}

const Input = (props: Props) => {
  const { label, value, name, placeholder, onChange, disabled, onBlur } = props;

  return (
    <label className={s.label}>
      { label }
      <input
        className={s.input}
        type="text"
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        onBlur={onBlur}
      />
    </label>
  )
}



export default Input;
