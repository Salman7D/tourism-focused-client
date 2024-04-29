import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../FirebaseProvider/FirebaseProvider';

const AddtouristsSpot = () => {

    const { user } = useContext(AuthContext) || {};

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
        const user_email = form.user_email.value;
        const user_name = form.user_name.value;
        const photo = form.photo.value;
        const email = user.email;

        const addSpot = {email, spot_name, country_Name, location, description, average_cost, seasonality, travel_time, totalVisitors, user_email, user_name, photo}

        console.log(addSpot);

        // send data to the server
        fetch("http://localhost:5000/touristsSpot", {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(addSpot)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Tourists Spot Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                  })
            }
        })
    }




    return (
        <div className="bg-[#dbdee2] p-24 mb-10">
            <h2 className="text-3xl font-extrabold">Add a Tourist Spot</h2>
            <form onSubmit={handleAddTouristsSpot}>
                {/* form name and quantity row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">tourists_spot_name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="spot_name" placeholder="tourists_spot_name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">country_Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="country_Name" placeholder="country_Name" className="input input-bordered w-full" />
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
                            <input type="text" name="location" placeholder="Location" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">short description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="short description" className="input input-bordered w-full" />
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
                            <input type="text" name="average_cost"
                                 placeholder="average_cost"
                                 className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">seasonality</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="seasonality" placeholder="seasonality" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">travel_time</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="travel_time" placeholder="travel_time" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">totalVisitorsPerYear</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="totalVisitors" placeholder="totalVisitors" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">User Email</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="user_email" placeholder="user_email" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="user_name" placeholder="user_name" className="input input-bordered w-full" />
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
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Tourists Spot" className="btn btn-block" />

            </form>
        </div>
    );
};

export default AddtouristsSpot;