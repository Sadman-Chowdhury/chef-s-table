import PropTypes from 'prop-types'; 
import Cook from '../Cook/Cook';
const WantToCook = ({cooks,handleCurrentCook}) => {
    return (
        <div className='border rounded-2xl text-center space-y-4 pt-5'>
            <h2 className='text-2xl font-semibold'>Want to cook: {cooks.length}</h2>
            <hr className='mx-10' />
            <table className='space-y-5'>
                <thead className='text-[#878787]'>
                    <td></td><td>Name</td><td className='pr-2'>Time</td><td>Calories</td><td></td>
                </thead>
                <tbody className='text-[#282828B3]'>
                    {
                        cooks.map((cook, idx)=><Cook key={idx} handleCurrentCook={handleCurrentCook} cook={cook} idx={idx}></Cook>)
                    }
                </tbody>
            </table>
        </div>
    );
};

WantToCook.propTypes = {
    cooks: PropTypes.object.isRequired,
    handleCurrentCook: PropTypes.func.isRequired
}

export default WantToCook;