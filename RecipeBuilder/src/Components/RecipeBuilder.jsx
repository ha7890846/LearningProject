import { useEffect, useState } from "react";
import "./builder.css";

const RecipeBuilder = () => {
  const [recipeName, setRecipeName] = useState("");
  const [ingredientName, setIngredientName] = useState("");
  const [ingredientQty, setIngredientQty] = useState("");
  const [ingredientUnit, setIngredientUnit] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [description, setDescription] = useState("");

  useEffect(() => {
    const storedRecipes = localStorage.getItem("RecipeList");
    if (storedRecipes) {
      setRecipes(JSON.parse(storedRecipes));
    }
  }, []);

  const addRecipe = () => {
    if (!recipeName || ingredients.length === 0) {
      alert("Please provide a recipe name and at least one ingredient.");
      return;
    }
    const newRecipeList = [
      ...recipes,
      { name: recipeName, ingredients, desc: description },
    ];
    localStorage.setItem("RecipeList", JSON.stringify(newRecipeList));
    setRecipes(newRecipeList);
    // set input area to empty...
    setRecipeName("");
    setIngredients([]);
    setDescription("");
  };

  const addIngredient = () => {
    if (ingredientName && ingredientQty && ingredientUnit) {
      setIngredients([
        ...ingredients,
        { name: ingredientName, qty: ingredientQty, unit: ingredientUnit },
      ]);
      setIngredientName("");
      setIngredientQty("");
      setIngredientUnit("");
    } else {
      alert("Please provide valid ingredient details.");
    }
  };
  const resetData = () => {
    setRecipeName("");
    setIngredients([]);
    setDescription("");
  };

  const deleteIngredient = (index) => {
    const updatedIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(updatedIngredients);
  };

  return (
    <div className="main">
      <div className="recipe">
        <label htmlFor="recipeName">Recipe Name: </label>
        <input
          type="text"
          placeholder="Recipe Name"
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
        />
      </div>
      <div className="ingredients">
        <label htmlFor="ingredients">Ingredient Name: </label>
        <input
          type="text"
          placeholder="Ingredient"
          value={ingredientName}
          onChange={(e) => setIngredientName(e.target.value)}
        />
        <label htmlFor="quantity">Qty: </label>
        <input
          type="number"
          placeholder="Qty"
          value={ingredientQty}
          onChange={(e) => setIngredientQty(e.target.value)}
        />
        <label htmlFor="unit">Unit: </label>
        <input
          type="text"
          placeholder="Unit"
          value={ingredientUnit}
          onChange={(e) => setIngredientUnit(e.target.value)}
        />
        <button type="button" onClick={addIngredient}>
          Add
        </button>
      </div>
      <div className="ingredientList">
        <table>
          <thead>
            <tr>
              <th>Ingredients</th>
              <th>Qty</th>
              <th>Unit</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {ingredients.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.qty}</td>
                <td>{item.unit}</td>
                <td>
                  <button
                    className="bttn"
                    onClick={() => deleteIngredient(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="desc">
        <label htmlFor="description">How to Cook : </label>
        <input id="descbox"
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <button type="submit" onClick={addRecipe}>
          Add Recipe
        </button>
        <button type="reset" onClick={resetData}>
          Clear All
        </button>
      </div>
      <div className="recipeList">
        <h2>Recipe List</h2>
        <table className="recipeTable">
          <thead>
            <tr>
              <th>Recipe Name</th>
              <th>Ingredients</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {recipes.map((recipe, index) => (
              <tr key={index}>
                <td>{recipe.name}</td>
                <td>
                  {recipe.ingredients.map((ing, i) => (
                    <div key={i}>
                      {ing.name} - {ing.qty} {ing.unit}
                    </div>
                  ))}
                </td>
                <td>{recipe.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecipeBuilder;
