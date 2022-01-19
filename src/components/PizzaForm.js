import React from "react";

function PizzaForm( {editPizzaObj, setEditPizzaObj, setPizzas} ) {
  const { id, topping, size, vegetarian } = editPizzaObj

  function handleToppingEdit(event) {
    setEditPizzaObj({
      ...editPizzaObj,
      topping: event.target.value
    })
  }

  function handleSizeEdit(event) {
    setEditPizzaObj({
      ...editPizzaObj,
      size: event.target.value
    })
  }

  function handleVegetarianEdit(event) {
    const veg = event.target.value === "Vegetarian" ? true : false
    debugger
    setEditPizzaObj({
      ...editPizzaObj,
      vegetarian: veg
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    fetch(`http://localhost:3001/pizzas/${id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(editPizzaObj)
    })
    fetch("http://localhost:3001/pizzas")
      .then(r => r.json())
      .then(data => setPizzas(data))
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={topping}
            onChange={handleToppingEdit}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" value={size} onChange={handleSizeEdit}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={vegetarian}
              onChange={handleVegetarianEdit}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={!vegetarian}
              onChange={handleVegetarianEdit}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
