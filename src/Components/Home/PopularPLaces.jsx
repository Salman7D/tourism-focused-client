

const PopularPLaces = () => {
    return (
        <div>
             <div className="lg:mb-10 mb-10 ml-4 mt-10 flex lg:gap-2 gap-2 lg:mt-16 lg:ml-28">
                <div className="bg-[#687389] w-4 h-14">

                </div>
                <div>
                    <p className="text-lg font-medium">POPULAR</p>
                    <p className="text-[#687389] text-2xl font-bold">PLACES</p>
                </div>
            </div>
        <div className="ml-16 md:ml-[230px] mb-10 md:mb-10 lg:mb-10 lg:ml-24 lg:mr-24 lg:flex justify-between">
            <div className="hover:scale-110 duration-500 transition-transform inline-block overflow-hidden bg-[url(/src/assets/Images/kualalampur3.png)] h-[300px] mb-10 w-[300px] lg:h-[300px] lg:w-[300px]">
            <p className="text-white text-2xl font-bold mt-36 lg:mt-32 text-center">Kualalampur</p>
            </div>
            <div className="hover:scale-110 duration-500 transition-transform inline-block overflow-hidden bg-[url(/src/assets/Images/Angkor-Wat3.png)] mb-5 h-[300px] w-[300px] lg:h-[300px] lg:w-[300px]">
            <p className="text-white text-2xl font-bold mt-36 lg:mt-32 text-center">Borobudur Temple</p>
            </div>
            <div className="hover:scale-110 duration-500 transition-transform inline-block overflow-hidden bg-[url(/src/assets/Images/bankok3.png)] mb-5 h-[300px] w-[300px] lg:h-[300px] lg:w-[300px]">
            <p className="text-white text-2xl font-bold mt-36 lg:mt-32 text-center">Bankok</p>
            </div>
            <div className="hover:scale-110 duration-500 transition-transform inline-block overflow-hidden bg-[url(/src/assets/Images/rangamati3.png)] h-[300px] mb-5 w-[300px] lg:h-[300px] lg:w-[300px]">
            <p className="text-white text-2xl font-bold mt-36 lg:mt-32 text-center">Rangamati</p>
            </div>
        </div>
            
        </div>
    );
};

export default PopularPLaces;