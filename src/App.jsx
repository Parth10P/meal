import React, { useState } from "react";

function App() {
  const [ingredient, setIngredient] = useState("");
  const [ingredientsList, setIngredientsList] = useState([]);

  const addIngredient = () => {
    if (ingredient.trim() !== "") {
      setIngredientsList([...ingredientsList, ingredient.trim()]);
      setIngredient("");
    }
  };

  const removeIngredient = (indexToRemove) => {
    
    const newList = [...ingredientsList];

    newList.splice(indexToRemove, 1);

    setIngredientsList(newList);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Quick Healthy Meal</h1>
      <h2>Enter your ingredients:</h2>
      <input
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
        placeholder="Enter an ingredient"
      />
      <button onClick={addIngredient}>Add</button>

      <h3>Your Ingredients:</h3>
      <ul>
        {ingredientsList.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeIngredient(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
