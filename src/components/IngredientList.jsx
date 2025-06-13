// src/components/IngredientList.jsx
import React, { useState } from 'react';

const IngredientList = ({ onUpdate }) => {
  const [input, setInput] = useState('');
  const [ingredients, setIngredients] = useState([]);

  const addIngredient = () => {
    if (input.trim()) {
      const updated = [...ingredients, input.trim()];
      setIngredients(updated);
      onUpdate(updated); 
      setInput('');
    }
  };

  const removeIngredient = (index) => {
    const updated = ingredients.filter((_, i) => i !== index);
    setIngredients(updated);
    onUpdate(updated);
  };

  return (
    <div>
      <h2>📝 Ingredients in Fridge</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="e.g. Tomato"
      />
      <button onClick={addIngredient}>Add</button>
      <ul>
        {ingredients.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => removeIngredient(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;
