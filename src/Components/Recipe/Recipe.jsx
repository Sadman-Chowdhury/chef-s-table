import PropTypes from 'prop-types'; 
import { LuClock4 } from "react-icons/lu";
import { AiOutlineFire } from "react-icons/ai";

const Recipe = ({recipe, handleWantToCook}) => {
    const {recipe_image, recipe_name, short_description, ingredients, preparing_time, calories} = recipe
    return (
        <div>
            <div className="space-y-4 p-6 border rounded-2xl h-full">
                <img className="h-[200px] w-full rounded-2xl" src={recipe_image} alt="" />
                <h1 className="text-xl font-semibold">{recipe_name}</h1>
                <p className="text-[#878787]">{short_description}</p>
                <hr />
                <h3 className="text-[18px] font-medium">Ingredients: {ingredients.length}</h3>
                <ul className="list-disc ml-8">{
                    ingredients.map((ingredient, idx)=><li key={idx} className="text-[#878787]">{ingredient}</li>)
                    }
                </ul>
                <hr />
                <div className="flex gap-6 text-[#282828CC]">
                    <div className="flex items-center gap-3">
                        <LuClock4 />
                        {preparing_time}
                    </div>
                    <div className="flex items-center gap-3">
                        <AiOutlineFire />
                        {calories}
                    </div>
                </div>
                <button onClick={()=>handleWantToCook(recipe)} className="text-xl text-[18px] font-medium bg-[#0BE58A]  px-6 py-3 rounded-[50px]">
                Want to Cook
                </button>
            </div>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleWantToCook: PropTypes.func.isRequired
}


export default Recipe;