import PropTypes from 'prop-types'; 
const Current = ({current, idx}) => {
    const {recipe_name, preparing_time, calories} = current
    return( 
            <tr className="bg-[#28282808] space-x-9">
                <h1 className="p-4 text-black font-bold">{idx+1}</h1>
            <td className="px-2">{recipe_name}</td>
            <td className="px-2">{preparing_time}</td>
            <td className="px-4">{calories}</td>
        </tr>
    );
};

Current.propTypes = {
    current: PropTypes.object.isRequired,
    idx: PropTypes.object.isRequired
}
export default Current;