

const SpotCard = ({spot}) => {

    const {spot_name, country_Name, location, description, average_cost, seasonality, travel_time, totalVisitors, user_email, user_name, photo} = spot;



    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="flex justify-between w-full pr-4">
                <div>
                    <h2 className="card-title">Name: {name}</h2>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            </div>
        </div>
    );
};

export default SpotCard;