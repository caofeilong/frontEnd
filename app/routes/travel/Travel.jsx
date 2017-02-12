import React, { Component } from 'react'
import  {Link}  from 'react-router';
import  styles from './Travel.scss';
import  $ from 'jquery';

class Travel extends Component {
  componentDidMount() {
    this.renderMap();
  }

  renderMap() {
    // 百度地图API功能
    var map = new BMap.Map("allmap");
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
    map.enableScrollWheelZoom(true);
    let points = this.state.points;
    if (points && points.length > 0) {
      for (var index in points) {
        if (!points[index]) {
          points.splice(index, 1);
        }
      }
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
  }

  constructor(props) {
    super(props);
    this.state = {
      points: ["北京"]
    }
  }

  addPoint(i) {
    let oldPoints = this.state.points || [];
    oldPoints.splice(i + 1, 0, '');
    this.setState({
      points: oldPoints
    })
  }

  changeValue(i, event) {
    let oldPoints = this.state.points || [];
    oldPoints[i] = event.target.value;
    this.setState({
      points: oldPoints
    })
  }

  removePoint(i) {
    let oldPoints = this.state.points || [];
    oldPoints.splice(i, 1);
    this.setState({
      points: oldPoints
    })
  }

  render() {
    let {points} = this.state;
    return (
      <div className={styles.main}>
        <div className={styles.serach}>
          <label for="">
            路线规划
          </label>

          {points.map((item, i) => {
            return <div key={i} className={styles.item}>
              <input type="text" value={item ||""} onChange={this.changeValue.bind(this,i)}/>
              <a onClick={this.addPoint.bind(this,i)}>+</a>
              <a onClick={this.removePoint.bind(this, i)}>-</a>
            </div>
          })}
          <br/>
          <button onClick={this.renderMap.bind(this)} className={styles.btnmain}>生成路线</button>
        </div>
        <div id="allmap" style={{width:"100%",height:800}}></div>
      </div>
    )
  }
}


module.exports = Travel;
