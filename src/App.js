import './App.css';
import React, { Component } from 'react';
import Rect from './Rect';

class App extends Component {

  data = [];

  area = {
    width: "500px",
    height: "500px",
    border: "1px solid blue"
  };

  constructor(props){
    super(props);
    this.state = {
      list: this.data
    };
    this.doAction = this.doAction.bind(this);
  }

  doAction(e){
    let x = e.pageX;
    let y = e.pageY;
    this.data.push({x: x, y: y});
    this.setState({
      list: this.data
    });
  }

  draw(d){
    let s = {
      position: "absolute",
      left: (d.x - 25) + "px",
      top: (d.y - 25) + "px",
      width: "50px",
      height: "50px",
      backgroundColor: "#66f3",
    }
    return <div style={s}></div>
  }

  render(){
    return (
      <div>
        <h1 className="bg-primary text-white display-4">React</h1>
        <div className="container">
          <p className="subtitle">draw rectangle</p>
          <div style={this.area} onClick={this.doAction}>
            {this.data.map((value)=>this.draw(value))}
          </div>
        </div>
        <div className="container p-relative">
          <p className="subtitle">draw rectangle.</p>
          <Rect x="200" y="200" width="200" height="200" color="#6ff9" radius="25" />
          <Rect x="300" y="300" width="200" height="200" color="#f6f9" radius="75" />
          <Rect x="400" y="400" width="200" height="200" color="#6669" radius="100" />
        </div>
      </div>
    )
  }
}

/*function App() {
  return (
    <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <p className="subtitle">This is sample component.</p>
        <p>これはサンプルのコンポーネントです。</p>
        <p>簡単なメッセージを表示します。</p>
      </div>
    </div>
  );
}*/

export default App;
