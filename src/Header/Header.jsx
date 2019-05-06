

import * as React from 'react';

import s from './Header.scss';

// type Props = {
//   label: string|number,
//   value: string|number,
//   name: string|number,
//   placeholder: string|number,
//   onChange: (e: SyntheticEvent<any>) => void,
//   onBlur: null|(e: SyntheticEvent<any>) => void,
//   disabled: boolean,
// }

export const Header = (props) => {

  return (
    <h1 className={s.header}>My Header says {props.text}</h1>
  )
}



export default Header;
