import { useLoaderData } from "react-router-dom";
import AllSpotCard from "./AllSpotCard";


const AllTouristsSpot = () => {
  const allSpots = useLoaderData();


    return (
      <div className="m-20">
      <h2 className="text-6xl text-center my-20 text-purple-600 mb-10">Total Spots: {allSpots.length}</h2>
      <div className="grid md:grid-cols-2 gap-4">
      {
          allSpots.map(allSpot => <AllSpotCard key={allSpot._id} allSpot={allSpot}></AllSpotCard>)
      }
      </div>
  </div>
    );
};

export default AllTouristsSpot;