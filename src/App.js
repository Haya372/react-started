import './App.css';
import React, { Component } from 'react';
import Rect from './Rect';
import Message from './Message';

class App extends Component {
  
  input = ''

  constructor(props){
    super(props);
    this.state = {
      title: 'input form',
      message: 'type your name.',
      max: 10
    }
    this.doCheck = this.doCheck.bind(this);
  }

  doCheck(e){
    alert(e.target.value + "は長すぎます。（最大" + this.state.max + "文字）") 
  }

  render(){
    return (
      <div>
        <h1 className="bg-primary text-white display-4">React</h1>
        <div className="container">
          <h4>{this.state.title}</h4>
          <Message maxlength={this.state.max} onCheck={this.doCheck} />
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
