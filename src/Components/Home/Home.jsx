import { Helmet } from "react-helmet";
import HomeSpot from "../HomeSpot";
import { Fade } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";
import Slider from "../Slider/Slider";


const Home = () => {


    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home - Skyline Residence</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <Slider></Slider>
            
            <Fade direction="down">
                <h1>Welcome to my world</h1>
            </Fade>
            
            <h1 style={{margin: "50px"}}>
                Tourism is {" "}
                <span style={{fontWeight: "bold,", color: "green"}}
                >
                <Typewriter
                words={['Awesome', 'Cool', 'Peace', 'Fantasy']}
                loop={false}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                
                
                >


                </Typewriter>
                
                
                </span>

                
                </h1>

            <HomeSpot></HomeSpot>
            
            
            
        </div>
    );
};

export default Home;