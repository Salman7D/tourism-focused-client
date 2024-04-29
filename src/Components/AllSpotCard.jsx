import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const AllSpotCard = ({ allSpot }) => {

    const {_id, country_Name, average_cost, photo, location, travel_time, seasonality} = allSpot;

    return (
        <div>
            <div className="card w-96 bg-[#dbdee2] shadow-xl ml-5 mb-10 lg:ml-10">
    <figure><img className="lg:h-[200px] lg:w-[320px] mt-5 h-[200px] w-[320px] rounded-xl lg:mt-5" src={photo} alt="" /></figure>
    
    <div className="card-body">
        <h1 className="font-medium text-xl">Country_Name: <span className="font-bold text-xl">{country_Name}</span></h1>
        <h2 className="card-title">Location: <span className="font-bold text-xl">{location}</span> </h2>
        <div className="flex justify-between lg:gap-3">
          
           <p><span className="font-bold">average_cost: </span>  {average_cost}</p>  
        </div>

        <div className="flex justify-between">
           <p><span className="font-bold">Travel_Time: </span> {travel_time}</p>
           <p><span className="font-bold">Seasonality: </span>  {seasonality}</p>  
        </div>


        <div className="card-actions justify-end">
        <Link className="bg-[#687389] rounded-lg text-white text-lg font-semibold btn btn-ghost" to={`/allSpot/${_id}`}>View Properties</Link>
        </div>
    </div>
</div>
        </div>
    );
};

AllSpotCard.propTypes = {
    allSpot: PropTypes.object
}


export default AllSpotCard;