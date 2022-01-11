import React from "react";

function ListItem({ text, onDeleteClick }) {
  return (
    <li className="list_item_container">
      <p className="list_item_text">{text}</p>
      <button className="delete_button" onClick={onDeleteClick}>X</button>
    </li>
  );
}

export default ListItem;
