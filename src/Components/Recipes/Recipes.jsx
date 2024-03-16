import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import WantToCook from "../WantToCook/WantToCook";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CurrentlyCooking from "../CurrentlyCooking/CurrentlyCooking";

const Recipes = () => {
    const [recipes, setRecipes] = useState([])
    const [cooks, setCooks] = useState([])
    const [currentlyCooking, setCurrentlyCooking] = useState([]);

    const handleWantToCook = recipe => {
        const isDuplicate = cooks.find((cook) => cook.recipe_id === recipe.recipe_id);

        if (isDuplicate) {
            toast("Recipe already added!", {
              });
          return;
        }
      const newCooks = [...cooks, recipe]
      setCooks(newCooks)
    }

    const handleCurrentCook = (recipe_id) => {
        const currentCook = cooks.filter((cook) => cook.recipe_id !== recipe_id);
        const recipeMove = cooks.find((cook) => cook.recipe_id === recipe_id);
        setCooks(currentCook);
        setCurrentlyCooking([...currentlyCooking, recipeMove]);
      };
    useEffect(()=>{
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])
    return (
        <div className="mt-12">
            <h1 className="text-[40px] font-semibold text-center">Our Recipes</h1>
            <p className="text-[#150B2B99] text-center mt-3">Savor the variety in our recipes, from Grilled Lemon Herb Chicken to Mango Coconut Smoothie Bowls. Each dish promises <br /> a fusion of flavor and nutrition, elevating your culinary experience effortlessly.</p>
            <ToastContainer></ToastContainer>
            <div className="flex gap-4 mt-10">
                <div className="grid grid-cols-2 gap-4 w-[60%]">{
                recipes.map(recipe => <Recipe handleWantToCook={handleWantToCook} recipe={recipe} key={recipe.recipe_id}></Recipe>)
                }</div>
                <div className="w-[40%]"><WantToCook handleCurrentCook={handleCurrentCook} cooks={cooks}></WantToCook><CurrentlyCooking currentlyCooking={currentlyCooking}></CurrentlyCooking></div>
            </div>
        </div>
    );
};

export default Recipes;