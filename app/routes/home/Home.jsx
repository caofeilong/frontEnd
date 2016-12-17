import React, { Component } from 'react'
let styles = require('./Home.scss');

class Home extends Component {
  render() {
    return (

      <div className={styles.home}>
      <div className={styles.text}>进取･坚韧･开放･影响</div>
      </div>
    )
  }
}

module.exports = Home;
