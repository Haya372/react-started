import './App.css';
import React, { Component } from 'react';

let data = {
  title: 'React-Context',
  message: 'this is sample message'
};

const SampleContext = React.createContext(data);

class App extends Component {
  
  newdata = {
    title: '新しいタイトル',
    message: 'これは新しいメッセージです。'
  }

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
          <Title />
          <Message />
          <hr />
          <SampleContext.Provider value={this.newdata}>
            <Title />
            <Message />
          </SampleContext.Provider>
          <hr />
          <Title />
          <Message />
        </div>
      </div>
    )
  }
}

class Title extends Component {
  static contextType = SampleContext;

  render(){
    return (
      <div className="card p-2 my-3">
        <h2>{this.context.title}</h2>
      </div>
    )
  }
}

class Message extends Component {
  static contextType = SampleContext;

  render(){
    return (
      <div className="alert alert-primary">
        <p>{this.context.message}</p>
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
