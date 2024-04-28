import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";


const Others = () => {

    const { user } = useContext(AuthContext) || {};
    const [item, setItem] = useState([]);
    

    useEffect(() => {

        fetch(`http://localhost:5000/myProduct/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setItem(data);
            console.log(data);
        });


    },[user]);


    return (
        <div>
            {
                item?.map(p => (
                    <div key={p._id}>
                        <h1>{p.spot_name}</h1>
                        <h1>{p.average_cost}</h1>
                    </div>
                ))
            }
        </div>
    );
};

export default Others;