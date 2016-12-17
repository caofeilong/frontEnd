import React, { Component } from 'react'
import  {Link}  from 'react-router';
let styles = require('./Home.scss');

class Home extends Component {
  render() {
    return (
      <div className={styles.home}>
        <div className={styles.text}>进取･坚韧･开放･影响
          <br/>
          <Link to="/travel">旅行规划</Link>
          <br/>
          <Link to="/travel">自动规划路线</Link>
        </div>
      </div>
    )
  }
}

module.exports = Home;
