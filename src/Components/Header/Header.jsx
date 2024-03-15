import { IoIosSearch } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
const Header = () => {
    return (
        <div className="flex items-center justify-between">
            <div>
            <h1 className="text-3xl font-bold">Recipe Calories</h1>
            </div>
            <div className="flex text-[#150B2BB3] gap-9">
                <a href="">Home</a>
                <a href="">Recipes</a>
                <a href="">About</a>
                <a href="">Search</a>
            </div>
            <div className="flex gap-4">
                <button className="bg-[#150B2B0D] px-6 py-1 flex text-xl items-center gap-2 w-64 rounded-[50px] text-[#150B2BB3]"><IoIosSearch/>Search</button>
                <button className="text-xl bg-[#0BE58A] p-2 rounded-[50px]">
                <FaRegCircleUser />
                </button>
            </div>
        </div>
    );
};

export default Header;