import { useLoaderData } from "react-router-dom";
import SpotCard from "./SpotCard";


const MyList = () => {

    const spots = useLoaderData();

    return (
        <div>
            <h2>Total Spots: {spots.length}</h2>
            {
                spots.map(spot => <SpotCard key={spot._id} spot={spot}></SpotCard>)
            }
        </div>
    );
};

export default MyList;