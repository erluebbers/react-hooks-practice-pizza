import React from "react";

function Pizza( {pizza, setEditPizzaObj} ) {
  const { id, topping, size, vegetarian } = pizza

  function handleEdit() {
    setEditPizzaObj({ 
      id: id, 
      topping: topping, 
      size: size, 
      vegetarian: vegetarian 
    })
  }

  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={handleEdit}>
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
