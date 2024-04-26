import { ImLocation } from "react-icons/im";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 md:overflow-hidden bg-[#232733]">
  <nav>
    <h6 className="footer-title text-white">## Skyline Residence</h6> 
    <p className=" lg:w-72 text-white lg:mb-5 mb-5 md:mb-12">At Skyline Residence, we pride ourselves on offering unparalleled luxury living with breathtaking views of the cityscape. Our website serves as a virtual gateway, inviting you to explore the sophistication and elegance that define our residence.</p>
    <a className="link link-hover text-white flex lg:gap-1 gap-1"><ImLocation></ImLocation> 95 South Park Avenue, USA</a>
    <a className="link link-hover text-white flex lg:gap-1 gap-1"><IoCall></IoCall> +456 875 369 208</a>
    <a className="link link-hover text-white flex lg:gap-1 gap-1"><MdEmail></MdEmail> support@skylineresidence.com</a>
  </nav> 
  <nav>
    <h6 className="footer-title text-white">Navigation</h6> 
    <div className="flex justify-center lg:gap-5 gap-5">
        <div>
        <p className="link link-hover lg:mb-2 md:mb-2 text-white">Home One</p>
        <p className="link link-hover lg:mb-2 md:mb-2 text-white">Properties Right</p>
        <p className="link link-hover lg:mb-2 md:mb-2 text-white">Properties List</p>
        <p className="link link-hover lg:mb-2 md:mb-2 text-white">Properties Details</p>
        <p className="link link-hover lg:mb-2 md:mb-2 text-white">Agents Listing</p>
    
        </div>

        <div>
        <p className="link link-hover lg:mb-2 md:mb-2 text-white">Agents Details</p>
        <Link to="/about">
        <p className="link link-hover lg:mb-2 md:mb-2 text-white">About Us</p> 
        </Link>     
    
        <p className="link link-hover lg:mb-2 md:mb-2 text-white">Blog Default</p>
    <p className="link link-hover lg:mb-2 md:mb-2 text-white">Blog Details</p> 
    <Link to="/contactUs">
    <p className="link link-hover lg:mb-2 md:mb-2 text-white">Contact Us</p>
    </Link>
        
     
        </div>
    
    </div>
    
  </nav> 
  <nav>
    <h6 className="footer-title text-white">Legal</h6> 
    <a className="link link-hover text-white">Terms of use</a>
    <a className="link link-hover text-white">Privacy policy</a>
    <a className="link link-hover text-white">Cookie policy</a>
  </nav>
  <nav>
  <form>
    <h6 className="footer-title text-white">Newsletter</h6> 
    <h2 className="lg:w-72 md:w-60 text-white">Sign Up for Our Newsletter to get Latest Updates and Offers. Subscribe to receive news in your inbox.</h2>
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text text-white lg:mt-5 mt-5">Enter your email address</span>
      </label> 
      <div className="join md:overflow-x-auto">
        <input type="email" placeholder="mail@site.com" className="input input-bordered join-item md:w-32 lg:w-60" /> 
        <button className="bg-[#687389] text-white btn btn-ghost join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
  
  </nav>
  
</footer> 
<footer className="footer px-10 py-4 border-t bg-[#232733] text-base-content border-base-300">
  <aside className="items-center grid-flow-col">
    
    <p className="text-white">2024 © Copyright - All Rights Reserved.</p>
  </aside> 
  <nav className="md:place-self-center md:justify-self-end">
    <div className="grid grid-flow-col gap-4">
      <a className="text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
      <a className="text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
      <a className="text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
    </div>
  </nav>
</footer>
        </div>
    );
};

export default Footer;