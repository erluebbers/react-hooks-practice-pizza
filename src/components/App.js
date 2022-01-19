import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([])
  const [editPizzaObj, setEditPizzaObj] = useState({ 
    id: "", 
    topping: "", 
    size: "", 
    vegetarian: true 
  })

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
      .then(r => r.json())
      .then(data => setPizzas(data))
  }, [])

  
  function handleSubmit(event) {
    event.preventDefault()
    console.log(editPizzaObj)
  }


  return (
    <>
      <Header />
      <PizzaForm 
        editPizzaObj={editPizzaObj}
        setEditPizzaObj={setEditPizzaObj}
        handleSubmit={handleSubmit}
      />
      <PizzaList 
        pizzas={pizzas}
        setEditPizzaObj={setEditPizzaObj}
      />
    </>
  );
}

export default App;
