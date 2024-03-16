import PropTypes from 'prop-types'; 
const Cook = ({cook, idx, handleCurrentCook}) => {
    const {recipe_name, preparing_time, calories, recipe_id} = cook
    return( 
            <tr className="bg-[#28282808] space-x-9">
                <h1 className="p-4">{idx+1}</h1>
            <td className="px-2">{recipe_name}</td>
            <td className="px-2">{preparing_time}</td>
            <td className="">{calories}</td>
            <td className="pr-3">
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