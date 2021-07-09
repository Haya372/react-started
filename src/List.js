import React, { Component } from 'react';
import Item from './Item';

class List extends Component{
  number = 1;

  render(){
    let data = this.props.data;
    return (
      <div>
        <p className="h5 text-center">{this.props.title}</p>
        <ul className="list-group">
          {data.map((item, key) =>
            <li className="list-group-item" key={key}>
              <Item number={key + 1} value={item} />
            </li>
          )
          }
        </ul>
      </div>
    )
  }
}

export default List;