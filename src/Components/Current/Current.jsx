const Current = ({current, idx, handleCurrentCook}) => {
    const {recipe_name, preparing_time, calories} = current
    return( 
            <tr className="bg-[#28282808] space-x-9">
                <h1 className="p-4">{idx+1}</h1>
            <td className="px-2">{recipe_name}</td>
            <td className="px-2">{preparing_time}</td>
            <td className="">{calories}</td>
        </tr>
    );
};

export default Current;