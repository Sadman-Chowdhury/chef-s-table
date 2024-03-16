const Cook = ({cook, idx}) => {
    const {recipe_name, preparing_time, calories} = cook
    return( 
            <tr className="bg-[#28282808] space-x-9">
                <h1 className="p-4">{idx+1}</h1>
            <td className="px-2">{recipe_name}</td>
            <td className="px-2">{preparing_time}</td>
            <td className="">{calories}</td>
            <td className="pr-3">
            <button className="text-xl text-[16px] font-medium bg-[#0BE58A] px-4 py-2 rounded-[50px]">
                Preparing
            </button>
            </td>
        </tr>
    );
};

export default Cook;