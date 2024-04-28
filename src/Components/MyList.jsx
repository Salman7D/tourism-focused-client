// import { useLoaderData } from "react-router-dom";
// import SpotCard from "./SpotCard";
// import { Fade } from "react-awesome-reveal";
// import { useState } from "react";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";
import Swal from "sweetalert2";


const MyList = () => {

                    
    // const loadedSpots = useLoaderData();
    // console.log(loadedSpots);
    // const [spots, setSpots] = useState(loadedSpots)

    const { user } = useContext(AuthContext) || {};
    const [item, setItem] = useState([]);
    const [control, setControl] = useState(false);


    useEffect(() => {

        fetch(`http://localhost:5000/myProduct/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setItem(data);
            console.log(data);
        });


    },[user, control]);
    
    const handleDelete = id => {

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
                fetch(`http://localhost:5000/delete/${id}`, {
            method: "DELETE",

        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                Swal.fire({
                    title: "Deleted!",
                    text: "Your Tourists Spot has been deleted.",
                    icon: "success"
                       });
                setControl(!control)
            }
        });
          }
        });
        
    }
    
    return (
        
        // <div className="m-20">
        //     <h2 className="text-6xl text-center my-20 text-purple-600 mb-10">Total Spots: {spots.length}</h2>
        //     <div className="grid md:grid-cols-2 gap-4">
        //         <Fade direction="right">
        //         {
        //         spots.map(spot => <SpotCard key={spot._id} spot={spot} spots={spots} setSpots={setSpots}></SpotCard>)
        //         }
        //         </Fade>
           
        //     </div>
        // </div>

        <div>
            <div>
            {
                item?.map(p => (
                    <div key={p._id}>
                        
                        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className="w-32 h-32 p-4 rounded-lg" src={p.photo} alt="" /></figure>
            <div className="flex justify-between w-full p-4">
                <div>
                    <h2 className="card-title">Country Name: {p.country_Name}</h2>
                    <p>Spot_name: {p.spot_name}</p>
                    <p>Location: {p.location}</p>
                    <p>Seasonality: {p.seasonality}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-4 space-x-2">
                        
                        
                        <button className="btn btn-accent">Update</button>
                        
                        <button onClick={() => handleDelete(p._id)}
                            className="btn bg-red-500">Delete</button>
                    </div>
                </div>
            </div>
        </div>
                    </div>
                ))
            }
        </div>
        </div>
    );
};

export default MyList;