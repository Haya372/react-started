import './App.css';
import React, { Component } from 'react';
import Rect from './Rect';

class App extends Component {
  
  input = ''

  constructor(props){
    super(props);
    this.state = {
      title: 'input form',
      message: 'type your name.'
    }
    this.doChange = this.doChange.bind(this);
    this.doSubmit = this.doSubmit.bind(this);
  }

  doChange(e){
    this.input = e.target.value;
  }

  doSubmit(e){
    this.setState({
      title: 'send form',
      message: 'Hello, ' + this.input + '!!'
    });
    e.preventDefault();
  }

  render(){
    return (
      <div>
        <h1 className="bg-primary text-white display-4">React</h1>
        <div className="container">
          <h4>{this.state.title}</h4>
          <p className="card h5 p-3">{this.state.message}</p>
          <div className="alert alert-primary mt-3">
            <form onSubmit={this.doSubmit}>
              <div className="form-group">
                <label>Message:</label>
                <input type="text" className="form-control" onChange={this.doChange} required pattern="[A-Za-z _,.]+"/>
              </div>
              <input type="submit" className="btn btn-primary" value="Click" />
            </form>
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
