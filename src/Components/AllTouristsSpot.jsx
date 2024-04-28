import { useLoaderData } from "react-router-dom";
import AllSpotCard from "./AllSpotCard";
import { useState } from "react";


const AllTouristsSpot = () => {
  const allSpots = useLoaderData();
  const [sortOrder, setSortOrder] = useState("ascending");
  
  const toggleSortOrder = () => {
    setSortOrder(prevOrder =>
      
        prevOrder === "ascending" ? "descending" : "ascending"
    );
  };

  const sortedSpots = [...allSpots].sort((a,b) => {
    if(sortOrder === "ascending"){
      return a.average_cost - b.average_cost;
    }
    else{
      return b.average_cost - a.average_cost;
    }
  });






    return (
<>
      <div className="dropdown">
  <div tabIndex={0} role="button" className="btn m-1">Sort</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a onClick={toggleSortOrder}>Average Cost</a></li>
  </ul>
</div>

      <div className="m-20">
      <h2 className="text-6xl text-center my-20 text-purple-600 mb-10">Total Spots: {allSpots.length}</h2>
      <div className="grid md:grid-cols-2 gap-4">
      {
          sortedSpots.map(allSpot => <AllSpotCard key={allSpot._id} allSpot={allSpot}></AllSpotCard>)
      }
      </div>
  </div>
  </>
    );
};

export default AllTouristsSpot;