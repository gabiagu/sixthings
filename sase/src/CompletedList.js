import React, { Component } from 'react';
import './list.css';

const items = [ "One", "Two", "Three" ];

const listItems = items.map((item, index) =>
  <li className="activeList__item">
    <input type="checkbox" id={"item_" + index} className="activeList__checkbox" /> 
    <label htmlFor={"item_" + index} className="activeList__text">{item}</label>
  </li>
);

class List extends Component {
  render() {
    return (
      /* foobar */
      <ul className="activeList">
        {listItems}
        <li className="activeList__new">
          <input type="text" placeholder="add new" id="item3" className="activeList__checkbox" /> 
        </li>
      </ul>
    );
  }
}

export default List;