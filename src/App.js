import './App.css';
import React, { Component } from 'react';
import Rect from './Rect';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      msg: 'count start!',
      counter: 0
    };
    this.doAction = this.doAction.bind(this);
  }

  doAction(event){
    this.setState({
      counter: this.state.counter + 1,
      msg: '*** count: ' + this.state.counter + ' ***'
    })
  }

  render(){
    return (
      <div>
        <h1 className="bg-primary text-white display-4">React</h1>
        <div className="container">
          <p className="subtitle">Count number.</p>
          <div className="alert alert-primary text-center">
            <p className="h5 mb-4">{this.state.msg}</p>
            <button className="btn btn-primary" onClick={this.doAction}>Click</button>
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
