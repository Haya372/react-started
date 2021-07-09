import React, { Component } from 'react';

class Message extends Component{
  li = {
    fontSize: "14pt",
    fontWeight: "bold",
    color: "#090"
  }

  constructor(props){
    super(props);
    this.doChange = this.doChange.bind(this);
  }

  doChange(e){
    if(e.target.value.length > this.props.maxlength){
      this.props.onCheck(e);
      e.target.value = e.target.value.substr(0, this.props.maxlength);
    }
  }

  render(){
    return (
      <div className="form-group">
        <label>input:</label>
        <input type="text" className="form-control" onChange={this.doChange} />
      </div>
    )
  }
}

export default Message;