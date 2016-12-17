import React, { Component } from 'react'
import  {Link}  from 'react-router';
import  $ from 'jquery';

class Travel extends Component {

  componentDidMount() {
    this.renderMap();
  }

  componentDidUpdate() {
    this.renderMap();
  }

  renderMap() {
    // 百度地图API功能
    var map = new BMap.Map("allmap");
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
    map.enableScrollWheelZoom(true);

    var p1 = new BMap.Point(116.301934, 39.977552);
    var p2 = new BMap.Point(116.508328, 39.919141);


    let points = this.state.points;

    if (points.length === 1) {
      var local = new BMap.LocalSearch(map, {
        renderOptions: {map: map}
      });
      local.search(points[0]);
    } else if (points.length === 2) {
      var driving = new BMap.DrivingRoute(map, {renderOptions: {map: map, autoViewport: true}});
      driving.search(points[0], points[1]);//waypoints表示途经点
    } else {
      let wayPoints = points.slice(1, points.length - 1);
      console.info(wayPoints);
      var driving = new BMap.DrivingRoute(map, {renderOptions: {map: map, autoViewport: true}});
      driving.search(points[0], points[points.length - 1], {waypoints: wayPoints});//waypoints表示途经点
    }

  }

  constructor(props) {
    super(props);
    this.state = {
      points: []
    }
  }

  addPoint() {
    let oldPoints = this.state.points || [];
    oldPoints.push($(this.refs.pointName).val());
    this.setState({
      points: oldPoints
    })
  }

  render() {
    return (
      <div>
        <div>
          <input type="text" ref="pointName"/>
          <button onClick={this.addPoint.bind(this)}>添加</button>
        </div>
        <div>
          {this.state.points}
        </div>
        <div id="allmap" style={{width:1000,height:800}}></div>
      </div>
    )
  }

}


module.exports = Travel;
