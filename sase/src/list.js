import React, { Component } from 'react';
import './list.css';

class List extends Component {
  render() {
    return (
      /* foobar */
      <ul className="activeList">
        <li className="activeList__item">
          <input type="checkbox" id="item1" className="activeList__checkbox" /> 
          <label htmlFor="item1" className="activeList__text">One</label>
        </li>
        <li className="activeList__item">
          <input type="checkbox" id="item2" className="activeList__checkbox" /> 
          <label htmlFor="item2" className="activeList__text">Two</label>
        </li>
        <li className="activeList__item">
          <input type="checkbox" id="item3" className="activeList__checkbox" /> 
          <label htmlFor="item3" className="activeList__text">Three</label>
        </li>
        <li className="activeList__new">
          <input type="text" placeholder="add new" id="item3" className="activeList__checkbox" /> 
        </li>
      </ul>
    );
  }
}

export default List;