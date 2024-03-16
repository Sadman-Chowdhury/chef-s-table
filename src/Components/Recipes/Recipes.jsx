import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import WantToCook from "../WantToCook/WantToCook";

const Recipes = () => {
    const [recipes, setRecipes] = useState([])
    const [cooks, setCooks] = useState([])

    const handleWantToCook = recipe => {
        const isDuplicate = cooks.find((cook) => cook.recipe_id === recipe.recipe_id);

        if (isDuplicate) {
          console.log("Recipe already added!");
          return;
        }
      const newCooks = [...cooks, recipe]
      setCooks(newCooks)
    }

    useEffect(()=>{
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])
    return (
        <div className="mt-12">
            <h1 className="text-[40px] font-semibold text-center">Our Recipes</h1>
            <p className="text-[#150B2B99] text-center mt-3">Savor the variety in our recipes, from Grilled Lemon Herb Chicken to Mango Coconut Smoothie Bowls. Each dish promises <br /> a fusion of flavor and nutrition, elevating your culinary experience effortlessly.</p>
            <div className="flex gap-4">
                <div className="grid grid-cols-2 gap-4 w-2/3">{
                recipes.map(recipe => <Recipe handleWantToCook={handleWantToCook} recipe={recipe} key={recipe.recipe_id}></Recipe>)
                }</div>
                <div className="w-1/3"><WantToCook cooks={cooks}></WantToCook></div>
            </div>
        </div>
    );
};

export default Recipes;