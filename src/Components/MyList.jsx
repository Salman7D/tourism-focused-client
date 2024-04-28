import { useLoaderData } from "react-router-dom";
import SpotCard from "./SpotCard";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";



const MyList = () => {

                    
    const loadedSpots = useLoaderData();
    console.log(loadedSpots);
    const [spots, setSpots] = useState(loadedSpots)

    return (
        <div className="m-20">
            <h2 className="text-6xl text-center my-20 text-purple-600 mb-10">Total Spots: {spots.length}</h2>
            <div className="grid md:grid-cols-2 gap-4">
                <Fade direction="right">
                {
                spots.map(spot => <SpotCard key={spot._id} spot={spot} spots={spots} setSpots={setSpots}></SpotCard>)
                }
                </Fade>
           
            </div>
        </div>
    );
};

export default MyList;