import { Helmet } from "react-helmet";
import { ImLocation2 } from "react-icons/im";
import { useLoaderData } from "react-router-dom";

const Details = () => {

    const spots = useLoaderData();

    const {spot_name, country_Name, location, description, average_cost, seasonality, travel_time, totalVisitors, photo} = spots;

    return (
        <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Details - Trip Advisor</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <div className="lg:ml-[100px] lg:mb-10">
              <div className=" lg:w-[900px]  lg:mt-0 mt-10 lg:ml-[200px]">
            <div className="flex justify-between bg-[#F5F7FB] mb-5 lg:mb-10 rounded-xl">
                <div className="lg:p-3 p-3">
                    <p className="text-lg font-semibold lg:mb-3 mb-3"># <span className="text-[#687389]">{spot_name}</span></p>
                <h2 className="text-3xl font-bold lg:mb-2 mb-3">{country_Name}</h2>
                <p className="text-lg font-medium flex lg:gap-2 lg:mb-3"><ImLocation2 className="lg:h-[24px] lg:w-[24px]"></ImLocation2>{location}</p>
                </div>
                <div>
                <p className="lg:p-3 p-3 text-[#687389] text-lg font-semibold">Average_Cost: {average_cost}</p>
                </div>
            </div>
 
                <div>
                    <img className="lg:h-[500px] lg:w-[900px] md:w-[745px] md:h-[400px] lg:ml-0 ml-3 w-[400px] h-[200px] rounded-xl" src={photo} alt="" />
                </div>

            <div className="bg-[#F5F7FB] rounded-xl lg:mt-10 mt-5 p-3 lg:p-3">
                <h2 className="text-lg font-medium">Short Description</h2>
                <div className="bg-[#687389] lg:w-10 lg:h-1 mb-3 lg:mb-5">
 
                </div>
                <p>{description}</p>
            </div>

            <div className="bg-[#F5F7FB] lg:mb-0 mb-5 lg:mt-10 mt-5 p-3 lg:p-3 rounded-xl">
                <h2 className="text-lg font-medium">Spot Details</h2>
                <div className="bg-[#687389] rounded-xl lg:w-10 lg:h-1 mb-5 lg:mb-5">

                </div>

                <div className="flex justify-center lg:gap-3 gap-5">
                    <p> <span className="font-bold">Seasonality:</span>  {seasonality}</p>
                    <p><span className="font-bold">Travel_Time:</span>  {travel_time}</p>
                    </div>
                    <div className="text-center lg:mt-10 mt-5">
                    <p className='mb-1 text-[#282828] text-lg font-medium'><span className="font-bold"> TotalVisitors:</span> {totalVisitors}</p>
                     
                    </div>
                    
                
            </div>
            
            
            
        </div>
        </div>
        </div>
    );
};

export default Details;