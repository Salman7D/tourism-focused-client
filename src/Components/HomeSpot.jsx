import { useLoaderData } from "react-router-dom";
import HSCard from "./HSCard";


const HomeSpot = () => {

    const spots = useLoaderData();

    const spotsToShow = spots.slice(0, 6);

    return (
        <div className="m-20">
        <h2 className="text-6xl text-center my-20 text-[#687389] mb-10">Total Spots: {spotsToShow.length}</h2>
        <div className="lg:grid lg:grid-cols-2 lg:gap-10 md:ml-20 lg:ml-28 lg:mt-10 lg:mb-10">
        {
            spotsToShow.map(spot => <HSCard key={spot._id} spot={spot}></HSCard>)
        }
        </div>
    </div>
    );
};

export default HomeSpot;