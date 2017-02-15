import React, { Component } from 'react';
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

  render(){
    return (
      <div className="row" style={{margin:"auto",width:300,"marginTop":50}}>

        <div className="form-group">
          <label for="inputEmail3" className="col-sm-2 control-label">账号</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
          </div>
        </div>
        <div className="form-group">
          <label for="inputPassword3" className="col-sm-2 control-label">密码</label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
          </div>
        </div>

        <button className="btn btn-primary" style={{margin:"auto",width:100,display:'block'}} onClick={this.register}>
          注册
        </button>
      </div>
    )
  }
}

module.exports = Home;
