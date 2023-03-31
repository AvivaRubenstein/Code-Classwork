import React from 'react';

function List(props) {
  return (
    <ul className="list-group">
      {/* TODO: Use the `map` method to iterate over each grocery and return a `li` element that contains the item's name and has a unique key attribute */}
      {props.groceries.map((item) => {
        return (
          <li className="list-group-item" key={item.id}>
            {item.name}
          </li>
        );
      })}
    </ul>
  );
}
//having a key associated with the list item can help us efficiently locate and update this item in the DOM
export default List;
