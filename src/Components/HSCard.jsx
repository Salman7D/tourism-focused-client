import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const HSCard = ({ spot }) => {

    const {_id, spot_name, average_cost, photo, totalVisitors, travel_time, seasonality} = spot;
   
    return (
        <div>
            <div className="card w-96 bg-[#dbdee2] shadow-xl ml-5 mb-10 lg:ml-10">
    <figure><img className="lg:h-[200px] lg:w-[320px] mt-5 h-[200px] w-[320px] rounded-xl lg:mt-5" src={photo} alt="" /></figure>
    
    <div className="card-body">
        <h1><span className="font-bold"># </span>{spot_name}</h1>
        <h2 className="card-title">{average_cost}</h2>
        <div className="flex justify-between lg:gap-3">
          
           <p><span className="font-bold">Price:</span>  {totalVisitors}</p>  
        </div>

        <div className="flex justify-between">
           <p><span className="font-bold">Status:</span> {travel_time}</p>
           <p><span className="font-bold">Area:</span>  {seasonality}</p>  
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