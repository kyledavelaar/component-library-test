
import React, { Component } from 'react'

import styles from './styles.css'

export default class Bar extends Component {

  render() {
    const {
      text
    } = this.props

    return (
      <div className={styles.bar}>
        Component Bar: {text}
      </div>
    )
  }
}
