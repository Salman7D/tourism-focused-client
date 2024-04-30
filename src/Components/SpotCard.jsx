import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const SpotCard = ({ spot, spots, setSpots }) => {

    const {_id, spot_name, country_Name, location, seasonality, photo} = spot;

    const handleDelete = _id => {
        console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            

            fetch(`https://tourism-focused-server.vercel.app/touristsSpot/${_id}`, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Tourists Spot has been deleted.",
                        icon: "success"
                           });
                           const remaining = spots.filter(spt => spt._id !== _id)
                           setSpots(remaining);
                }
            })
            }
          });
    }



    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className="w-32 h-32 p-4 rounded-lg" src={photo} alt="" /></figure>
            <div className="flex justify-between w-full p-4">
                <div>
                    <h2 className="card-title">Country Name: {country_Name}</h2>
                    <p>Spot_name: {spot_name}</p>
                    <p>Location: {location}</p>
                    <p>Seasonality: {seasonality}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-4 space-x-2">
                        
                        <Link to={`/updatedSpot/${_id}`}>
                        <button className="btn btn-accent">Update</button>
                        </Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn bg-red-500">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

SpotCard.propTypes = {
    spot: PropTypes.object,
    spots: PropTypes.object,
    setSpots: PropTypes.object
}

export default SpotCard;