// @flow

import * as React from 'react';
import s from './SearchBar.scss';
import SearchIcon from './search.svg';

type Props = {
  placeholder: string,
  query: string,
  onSearch: (val: string) => void,
  onChange: (val: string) => void,
}

type State = {
}

export class SearchBar extends React.PureComponent<Props, State> {
  state = {

  }

  render() {
    const { placeholder, query } = this.props;

    return (
      <div id={s.wrapper}>
        <img
          src={SearchIcon}
          alt="search"
          className={s.icon}
          onClick={() => this.onSearchClick()}
        />
        <input
          className={s.search_input}
          type="text"
          value={query}
          onKeyUp={(e) => this.onInputChange(e)}
          onChange={(e) => this.onInputChange(e)}
          placeholder={placeholder}
        />
      </div>
    )

  }


///////////////////////////////////////////////////////////
//  EVENT HANDLERS
//////////////////////////////////////////////////////////

  onInputChange(e: any) {
    e.preventDefault();
    const query = e.currentTarget.value;
    this.props.onChange(query);

    if (e.keyCode === 13) {
      this.props.onSearch(query);
    }
  }

  onSearchClick() {
    this.props.onSearch(this.props.query);
  }

}



export default SearchBar
