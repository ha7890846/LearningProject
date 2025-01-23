/* eslint-disable no-unused-vars */
import RecipeBuilder from "./Components/RecipeBuilder";
const App = () => {
  return (
    <div style={{ textAlign: "center" , padding: "20px", margin: "30px", height: "100vh", overflow: "auto", backgroundColor: "rgba(0, 0, 0, 0.2)",border: "1px solid black", borderRadius: "10px"}}>
      <h1>Welcome to RecipeBuilder</h1>
      <RecipeBuilder />
    </div>
  );
};

export default App;
