import { useContext, useState } from "react";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";


const Register = () => {

    const {createUser, updateUserProfile} = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

    //   navigation system
    const navigate = useNavigate();

    const from = "/";

    const onSubmit = data => {
        const { email, password, name, image } = data;
        
        // create user update and profile
        createUser(email, password)
            .then(() => {
              
              navigate(from);
              updateUserProfile(name, image)
                .then(() => {
                  Swal.fire({
                    title: 'Success!',
                    text: 'User Register Successfully',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                  })
                    // setUser(user);
                  // navigate(from);
                    
                
              });
                
        })
              .catch(error => {
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "User Already Exist",
                });
                console.log(error.message);
              })
        
        
    };

    return (
        <div className="">
          <Helmet>
                <meta charSet="utf-8" />
                <title>Register - Skyline Residence</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h2 className="text-3xl lg:mb-10 lg:mt-0 mt-10 mb-10 text-center text-[#687389]">Please Register</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-[#ccd4e4] rounded-xl card-body lg:w-1/2 md:w-3/4 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name="name" type="text" placeholder="your name" className="input input-bordered" {...register("name", { required: true })} />
          {errors.name && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoUrl</span>
          </label>
          <input name="image" type="text" placeholder="PhotoURL" className="input input-bordered" {...register("image", {required: false})} />
          {/* {errors.image && <span>This field is required</span>} */}
        </div>
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
            placeholder="password" className="input input-bordered w-full py-2 px-4" {...register("password", { required: "This field is required", pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
              message: "Must be an Uppercase, a Lowercase and Length must 6 characters",
            }, })} />
            <span className="text-red-600">{errors.password && errors.password.message}</span>
            
            
            <span className="absolute top-4 right-2" onClick={() => setShowPassword(!showPassword)}>
                {
                    showPassword ?  <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                }
            </span>
          </div>
        </div>
        <div className="form-control mt-6">
        <button className="bg-[#687389] rounded-lg text-white text-lg font-semibold btn btn-ghost">Register</button>
        </div>
        
      </form>
      <p className="text-center lg:mb-10 mb-10 lg:mt-10 mt-10 font-bold">Already Have an account? <Link className="text-[#687389] font-bold" to="/login">
        Login
      </Link></p>
      
    </div>
    );
};

export default Register;