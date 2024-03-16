import PropTypes from 'prop-types'; 
const Cook = ({cook, idx, handleCurrentCook}) => {
    const {recipe_name, preparing_time, calories, recipe_id} = cook
    return( 
            <tr className="bg-[#28282808] mt-10 my-4">
                <h1 className="px-5 text-black font-bold">{idx+1}</h1>
                <td className="px-4">{recipe_name}</td>
                <td className="px-4">{preparing_time}</td>
                <td className="">{calories}</td>
                <td className="px-4">
                <button onClick={()=>handleCurrentCook(recipe_id)} className="text-xl text-[16px] font-medium bg-[#0BE58A] px-4 py-2 rounded-[50px]">
                Preparing
            </button>
            </td>
        </tr>
    );
};

Cook.propTypes = {
    cook: PropTypes.object.isRequired,
    idx: PropTypes.object.isRequired,
    handleCurrentCook: PropTypes.func.isRequired
}

export default Cook;