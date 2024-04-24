import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Meal.css";

function Meal() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const handelSubmit = () => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
      .then((data) => setItems(data.data.meals))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="search-container">
        <div class="form__group field">
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            type="input"
            class="form__field"
            placeholder="Name"
            name="name"
            id="name"
            required
          />
          <label for="name" class="form__label">
            Search...
          </label>
        </div>

        <button onClick={handelSubmit}>Submit</button>
      </div>
      {items.map(
        ({
          idMeal,
          strMeal,
          strCategory,
          strMealThumb,
          strArea,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
          strIngredient6,
          strMeasure1,
          strMeasure2,
          strMeasure3,
          strMeasure4,
          strMeasure5,
          strMeasure6,
          strInstructions,
        }) => {
          return (
            <div key={idMeal}>
              <p>Originates from: {strArea}</p>
              <p>The name of the food: {strMeal}</p>
              <div>
                <h1>Sastojci:</h1>
                <p>
                  {strIngredient1}-{strMeasure1}
                </p>
                <p>
                  {strIngredient2}: {strMeasure2}
                </p>
                <p>
                  {strIngredient3}: {strMeasure3}
                </p>
                <p>
                  {strIngredient4}: {strMeasure4}
                </p>
                <p>
                  {strIngredient5}: {strMeasure5}
                </p>
                <p>
                  {strIngredient6}: {strMeasure6}
                </p>
                <h1>Instructions: </h1>
                <p>{strInstructions}</p>
              </div>
              <p>{strCategory}</p>
              <img src={strMealThumb} />
            </div>
          );
        }
      )}
    </>
  );
}

export default Meal;
