import React from "react";
import { v4 as uuid } from "uuid";

function ListItem({ title, id, status, handleDelete, isHidden }) {
  const handleDeleteFn = () => {
    handleDelete(id);
  };

  if (isHidden) {
    return null;
  }
  return (
    <div style={{ border: "1px solid blue", margin: 5 }}>
      <h1> {title} </h1>
      <button onClick={handleDeleteFn}>Delete</button>
    </div>
  );
}

export { ListItem };
