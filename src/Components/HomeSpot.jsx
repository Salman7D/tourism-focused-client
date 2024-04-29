import { useLoaderData } from "react-router-dom";
import HSCard from "./HSCard";


const HomeSpot = () => {

    const spots = useLoaderData();

    const spotsToShow = spots.slice(0, 6);

    return (
        <div>
        <h2 className="text-6xl text-center my-20 text-[#687389] mb-10">Total Spots: {spotsToShow.length}</h2>
        <div className="lg:grid lg:grid-cols-2 md:ml-[180px] lg:ml-[180px] ml-[20px]">
        {
            spotsToShow.map(spot => <HSCard key={spot._id} spot={spot}></HSCard>)
        }
        </div>
    </div>
    );
};

export default HomeSpot;