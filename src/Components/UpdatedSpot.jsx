import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdatedSpot = () => {

    const spot = useLoaderData();

    const {_id, spot_name, country_Name, location, description, average_cost, seasonality, travel_time, totalVisitors, photo} = spot;

    const handleAddTouristsSpot = e => {
        e.preventDefault();

        const form = e.target;

        const spot_name = form.spot_name.value;
        const country_Name = form.country_Name.value;
        const location = form.location.value;
        const description = form.description.value;
        const average_cost = form.average_cost.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.travel_time.value;
        const totalVisitors = form.totalVisitors.value;
        
        const photo = form.photo.value;

        const UpdatedSpot = {spot_name, country_Name, location, description, average_cost, seasonality, travel_time, totalVisitors, photo}

        console.log(UpdatedSpot);

        // send data to the server
        fetch(`http://localhost:5000/touristsSpot/${_id}`, {
            method: "PUT",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(UpdatedSpot)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount){
                Swal.fire({
                    title: 'Success!',
                    text: 'Tourists Spot Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                  })
            }
        })
    }

    return (
        <div className="bg-[#F4F3F0] p-24 mb-10">
            <h2 className="text-3xl font-extrabold">Updated a Tourist Spot: {spot_name}</h2>
            <form onSubmit={handleAddTouristsSpot}>
                {/* form name and quantity row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">tourists_spot_name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="spot_name" defaultValue={spot_name} placeholder="tourists_spot_name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">country_Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="country_Name" defaultValue={country_Name} placeholder="country_Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form supplier row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="location" defaultValue={location} placeholder="Location" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">short description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" defaultValue={description} placeholder="short description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">average_cost</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="average_cost" defaultValue={average_cost}
                                 placeholder="average_cost"
                                 className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">seasonality</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="seasonality" defaultValue={seasonality} placeholder="seasonality" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">travel_time</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="travel_time" defaultValue={travel_time} placeholder="travel_time" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">totalVisitorsPerYear</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="totalVisitors" defaultValue={totalVisitors} placeholder="totalVisitors" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* form Photo url row */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update Tourists Spot" className="btn btn-block" />

            </form>
        </div>
    );
};

export default UpdatedSpot;