// import { useLoaderData } from "react-router-dom";
// import SpotCard from "./SpotCard";
// import { Fade } from "react-awesome-reveal";
// import { useState } from "react";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";


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

        <>
         <Helmet>
                <meta charSet="utf-8" />
                <title>My list - Trip Advisor</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <Fade direction="up">
            <div>
            <div className="lg:p-10 p-5">
            {
                item?.map(p => (
                    <div key={p._id}>

                        <div className="card card-side bg-[#dbdee2] shadow-xl lg:mb-10 mb-10 lg:mt-10 mt-20">
            <figure><img className="w-32 h-32 p-4 rounded-lg" src={p.photo} alt="" /></figure>
            <div className="flex justify-between w-full p-4">
                <div>
                    <h2 className="card-title">Country Name:<span className="font-bold text-xl">{p.country_Name}</span> </h2>
                    <p><span className="font-bold">Spot_name:</span>  {p.spot_name}</p>
                    <p><span className="font-bold">Location: </span> {p.location}</p>
                    <p><span className="font-bold">Seasonality: </span> {p.seasonality}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-4 space-x-2">
                        
                        <Link to={`/products/${p._id}`}>
                        <button className="btn btn-accent">Update</button>
                        </Link>
                        
                        
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
        </Fade>
        </>
    );
};

export default MyList;