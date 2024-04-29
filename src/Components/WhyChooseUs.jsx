import { ImAirplane } from "react-icons/im";
import { FaShip } from "react-icons/fa6";
import { GiPikeman } from "react-icons/gi";
import { PiMountainsBold } from "react-icons/pi";
import { FaSun } from "react-icons/fa";

const WhyChooseUs = () => {
    return (
        <div>
            <h2 className="text-center mb-5 lg:mt-20  text-5xl font-bold ">Choose Tour</h2>
            <p className="text-center text-[#687389] font-bold text-xl lg:p-5 lg:mb-10 mb-10">Find your next travel adventure and make it memorable. Explore wildlife, enjoy seaside or book a cruise tour. Check out our popular destinations.
            </p>

            <div className="lg:flex gap-1 flex justify-evenly mb-10 lg:mb-10">
                <div className="hover:scale-110 duration-500 transition-transform inline-block overflow-hidden lg:p-5 p-1 border border-solid border-[#8e9cb8] rounded-xl lg:h-[170px] lg:w-[170px]">
                    <ImAirplane className="ml-10 lg:ml-3 lg:mb-5 lg:h-[100px] lg:w-[100px]"></ImAirplane>
                    <p className="text-center font-bold">Self-Guided</p>
                </div>
                <div className="hover:scale-110 duration-500 transition-transform inline-block overflow-hidden lg:p-5 p-1 border border-solid border-[#8e9cb8] rounded-xl lg:h-[170px] lg:w-[170px]">
                    <FaShip className="ml-5 lg:ml-3 lg:mb-5 lg:h-[100px] lg:w-[100px]"></FaShip>
                    <p className="text-center font-bold">Cruises</p>
                </div>
                <div className="hover:scale-110 duration-500 transition-transform inline-block overflow-hidden lg:p-5 p-1 border border-solid border-[#8e9cb8] rounded-xl lg:h-[170px] lg:w-[170px]">
                    <GiPikeman className="ml-8 lg:ml-3 lg:mb-5 lg:h-[100px] lg:w-[100px]"></GiPikeman>
                    <p className="text-center font-bold">Adventure</p>
                </div>
                <div className="hover:scale-110 duration-500 transition-transform inline-block overflow-hidden lg:p-5 p-1 border border-solid border-[#8e9cb8] rounded-xl lg:h-[170px] lg:w-[170px]">
                    <PiMountainsBold className="ml-5 lg:ml-3 lg:mb-5 lg:h-[100px] lg:w-[100px]"></PiMountainsBold>
                    <p className="text-center font-bold">Wildlife</p>
                </div>
                <div className="hover:scale-110 duration-500 transition-transform inline-block overflow-hidden lg:p-5 p-1 border border-solid border-[#8e9cb8] rounded-xl lg:h-[170px] lg:w-[170px]">
                    <FaSun className="ml-6 lg:ml-3 lg:mb-5 lg:h-[100px] lg:w-[100px]"></FaSun>
                    <p className="text-center font-bold">Seaside</p>
                </div>
               
                
            </div>
            
            
            
        </div>
    );
};

export default WhyChooseUs;