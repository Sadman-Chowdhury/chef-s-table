import { IoIosSearch } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import './Header.css'
const Header = () => {
    return (
        <div>
            {/* Navbar */}
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
        {/* banner */}
        <div className="custom-background-1 space-y-11 text-center px-[130px] py-[100px] rounded-3xl mt-12">
            <h1 className="text-[52px] font-bold text-white">Discover an exceptional cooking <br /> class tailored for you!</h1>
            <p className="text-[18px] text-white">Here we have the recipes of healthy dishes that plays a pivotal role in nourishing the body while maintaining energy balance. They serve as the cornerstone of a balanced diet, fostering vitality and supporting overall well-being.</p>
            <div className="flex gap-4 justify-center">
            <button className="text-xl font-semibold bg-[#0BE58A] px-8 py-5 rounded-[50px]">
               Explore Now
                </button>
                <button className="text-xl font-semibold border px-8 py-5 rounded-[50px] text-white">
               Our Feedback
                </button>
            </div>
        </div>
        </div>
    );
};

export default Header;