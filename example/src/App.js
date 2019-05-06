import React, { Component } from 'react'

import { Input, Header, SearchBar } from 'component-library-test'
import s from './index.css';

export default class App extends Component {
  render () {
    return (
      <div className={s.container}>
        <Header></Header>
        <Input
          label="CITY"
          name="city"
          placeholder=""
          value={""}
          onChange={ () => {console.log('changed')} }
          disabled={false}
          onBlur={ () => {console.log('blur')} }
        />
        <SearchBar
          placeholder="Search Members"
          query=""
          onSearch={ () => {console.log('search')} }
          onChange={ () => {console.log('change')} }
        />
      </div>
    )
  }
}
