import { Link } from "react-router-dom";



const NotFound = () => {
    return (
        <div>
            
            <p className="text-2xl font-bold mt-[250px] md:ml-[290px] ml-[120px]  lg:mb-5 lg:mt-[300px] lg:ml-[680px]">404 Not Found</p>
            <Link className="lg:p-2 lg:ml-[700px] ml-[155px] md:ml-[320px] rounded-2xl bg-black text-white" to="/">Go Back Home</Link>
            
        </div>
    );
};

export default NotFound;