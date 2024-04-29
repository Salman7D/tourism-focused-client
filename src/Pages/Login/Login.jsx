import { useContext, useState } from "react";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "../SocialLogin";
import Swal from "sweetalert2";


const Login = () => {

    const {signInUser} = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      // navigation system
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state || "/";
    
      const onSubmit = data => {
        const { email, password } = data
        signInUser(email, password)
            .then(result => {
               if(result.user){
                Swal.fire({
                  title: 'Success!',
                  text: 'User Logged in Successfully',
                  icon: 'success',
                  confirmButtonText: 'Okay'
                })
                navigate(from);
                
               }
        })
            .catch(() => {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Invalid Email or Password",
              });
              
            })
        
        
        
    };


    return (
        <div>
          <Helmet>
                <meta charSet="utf-8" />
                <title>Login - Skyline Residence</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h2 className="text-3xl my-10 text-center text-[#687389] lg:mt-0 lg:mb-10">Please Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body bg-[#ccd4e4] rounded-xl lg:w-1/2 md:w-3/4 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
          {errors.email && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className="relative mb-4">
            <input  name="password" 
            type={ showPassword ? "text" : "password" } 
            placeholder="password" className="input input-bordered w-full py-2 px-4" {...register("password", { required: true })} />
            {errors.password && <span className="text-red-600">This field is required</span>}
            <span className="absolute top-4 right-2" onClick={() => setShowPassword(!showPassword)}>
                {
                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                }
            </span>
          </div>

          {/* <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label> */}
        </div>
        <div className="form-control mt-6">
          <button className="bg-[#687389] rounded-lg text-white text-lg font-semibold btn btn-ghost">Login</button>
        </div>
        
      </form>
      <SocialLogin></SocialLogin>
      <p className="text-center lg:mt-10 mt-10 lg:mb-10 mb-10 font-bold">New Here? <Link className="text-[#687389]  font-bold" to="/register">
        Register
      </Link></p>
      
    </div>
    );
};

export default Login;