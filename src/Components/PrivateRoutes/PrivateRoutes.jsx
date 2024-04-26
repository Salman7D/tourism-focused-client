import { useContext } from "react";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRoutes = ({ children }) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <span className="lg:w-[200px] lg:h-[200px] lg:ml-[650px] w-[100px] h-[100px] md:ml-[200px] ml-[150px] loading loading-infinity"></span>
    }

    if(!user){
        return <Navigate to="/login" state={location?.pathname || "/"}></Navigate>
    }




    return (
        <div>
            {children}
        </div>
    );
};

PrivateRoutes.propTypes = {
    children: PropTypes.node
}

export default PrivateRoutes;