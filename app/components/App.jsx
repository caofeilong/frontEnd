/*globals COURSES:true */
import React, { Component } from 'react'
import { Link } from 'react-router'
class App extends Component {
  render() {
    return (
      <div>
        <div style={{ padding: 20 }}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

module.exports = App;
