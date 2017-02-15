import React, { Component } from 'react'
import  $   from 'jquery';

class Home extends Component {
  register() {
    $.post('/api/user/register', {
      "uname": "本地测试",
      "pwd": "123"
    }).success(function (data) {
      console.info("data", data);
    })
  }

  render() {
    return (
      <div >
        register
        <button onClick={this.register}>注册</button>
      </div>
    )
  }
}

module.exports = Home;
