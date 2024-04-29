import { useLoaderData } from "react-router-dom";
import AllSpotCard from "./AllSpotCard";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";


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

            <Helmet>
                <meta charSet="utf-8" />
                <title>All Tourists Spot - Trip Advisor</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className="dropdown ml-[180px] md:ml-[350px] mt-10 lg:ml-[700px]">
  <div tabIndex={0} role="button" className="btn m-1">Sort by</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a onClick={toggleSortOrder}>Average Cost</a></li>
  </ul>
</div>
      <Fade direction="left">
          <div>
          <h2 className="text-6xl text-center my-20 text-[#687389] mb-10">Total Spots: {allSpots.length}</h2>
          <div className="lg:grid lg:grid-cols-2 md:ml-[180px] lg:ml-[180px]">
          {
              sortedSpots.map(allSpot => <AllSpotCard key={allSpot._id} allSpot={allSpot}></AllSpotCard>)
          }
          </div>
      </div>
      </Fade>
      
  </>
    );
};

export default AllTouristsSpot;