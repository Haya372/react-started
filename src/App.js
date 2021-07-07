import './App.css';
import React, { Component } from 'react';
import Rect from './Rect';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      msg: 'Hello',
      count: 0
    };
    let timer = setInterval(() => {
      this.setState({
        count: this.state.count + 1,
        msg: "[ count: " + this.state.count + " ]"
      });
    }, 1000);
  }

  render(){
    return (
      <div>
        <h1 className="bg-primary text-white display-4">React</h1>
        <div className="container">
          <p className="subtitle">Show message.</p>
          <p className="alert alert-warning">{this.state.msg}</p>
          <p className="alert alert-dark">{this.props.msg}</p>
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
