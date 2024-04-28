import { Helmet } from "react-helmet";
import HomeSpot from "../HomeSpot";


const Home = () => {

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home - Skyline Residence</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <HomeSpot></HomeSpot>
            
            
            
        </div>
    );
};

export default Home;