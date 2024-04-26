import { useContext } from "react";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const SocialLogin = () => {

    const { googleLogin, githubLogin } = useContext(AuthContext);

    // navigation system
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state || "/";

    const handleSocialLogin = socialprovider => {
        socialprovider()
        .then(result => {
            if(result.user){
                toast.success("Successfully Login");
                navigate(from);
                
            }
        })
    }

    return (
        <>
        <div className="divider lg:w-1/2 lg:ml-[400px] mt-10 mb-10 font-bold">
        Continue with
    </div>
    <div className="flex justify-center lg:gap-16 gap-5 lg:mb-0 mb-5">
    <button onClick={() => handleSocialLogin(googleLogin)} className="btn btn-ghost border-primary text-primary">Google</button>
    <button onClick={() => handleSocialLogin(githubLogin)} className="btn btn-ghost border-secondary text-secondary">Github</button>
    </div>
    </>
    );
};

export default SocialLogin;