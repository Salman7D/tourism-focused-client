import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const HSCard = ({ spot }) => {

    const {_id, country_Name, location, photo, average_cost, travel_time, seasonality} = spot;
   
    return (
        <div>
            <div className="card w-96 bg-[#dbdee2] shadow-xl ml-0 mb-10 lg:ml-10">
    <figure><img className="lg:h-[200px] lg:w-[320px] mt-5 h-[200px] w-[320px] rounded-xl lg:mt-5" src={photo} alt="" /></figure>
    
    <div className="card-body">
        <h1 className="font-medium text-xl">country_name: <span className="font-bold text-xl">{country_Name}</span></h1>
        <h2 className="card-title">Location: <span className="font-bold text-xl">{location}</span> </h2>
        <div className="flex justify-between lg:gap-3">
          
           <p><span className="font-bold">Average_Cost: </span>  {average_cost}</p>  
        </div>

        <div className="flex justify-between lg:gap-2">
           <p><span className="font-bold">Travel_time: </span> {travel_time}</p>
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

HSCard.propTypes = {
    spot: PropTypes.object
}

export default HSCard;