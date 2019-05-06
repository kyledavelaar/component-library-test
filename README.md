# component-library-test

> component library

[![NPM](https://img.shields.io/npm/v/component-library-test.svg)](https://www.npmjs.com/package/component-library-test) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save component-library-test-kyle-davelaar
```

## Usage

```jsx
import React, { Component } from 'react'

import { Input, Header, SearchBar } from 'component-library-test-kyle-davelaar'
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

```

## License

MIT © [kyledavelaar](https://github.com/kyledavelaar)
