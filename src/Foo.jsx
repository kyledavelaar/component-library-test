import React, { Component } from 'react'

import styles from './styles.css'

export default class Foo extends Component {

  render() {
    const {
      text
    } = this.props

    return (
      <div className={styles.foo}>
        Component Foo: {text}
      </div>
    )
  }
}
