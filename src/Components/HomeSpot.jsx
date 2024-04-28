import { useLoaderData } from "react-router-dom";
import HSCard from "./HSCard";


const HomeSpot = () => {

    const spots = useLoaderData();

    const spotsToShow = spots.slice(0, 6);

    return (
        <div className="m-20">
        <h2 className="text-6xl text-center my-20 text-purple-600 mb-10">Total Spots: {spotsToShow.length}</h2>
        <div className="grid md:grid-cols-2 gap-4">
        {
            spotsToShow.map(spot => <HSCard key={spot._id} spot={spot}></HSCard>)
        }
        </div>
    </div>
    );
};

export default HomeSpot;