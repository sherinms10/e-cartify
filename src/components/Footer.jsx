import {  Calendar, Clock10, Facebook, Instagram, MapPin, Phone, Twitter, Youtube, } from "lucide-react";
import logo from "../assets/img/logo.png";

import app from "../assets/img/pay/app.jpg";
import play from "../assets/img/pay/play.jpg";
import pay from "../assets/img/pay/pay.png";




export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10 px-6 text-sm">
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img src={logo} alt="Logo" className="mb-4 h-10" />
          <div className="flex flex-col gap-4">
                <p className=" flex gap-2"><span><MapPin className="w-4 h-4 mt-[2px]"/></span> Panagal Park, near Indian Bank, T. Nagar, Chennai, Tamil Nadu 600017 </p>

          <p className=" flex gap-2"><span><Phone className="w-4 h-4 mt-[2px]"/></span> +91 98765 43210</p>
          <p className=" flex gap-2"> <span><Calendar className="w-4 h-4 mt-[2px]"/></span>Mon-Sat</p>

          <p className=" flex gap-2"> <span><Clock10 className="w-4 h-4 mt-[2px]"/></span> 10:00-21:00</p>
          </div>
        <div className=" flex gap-4 mt-4">
          <button className=" cursor-pointer"><Facebook/></button>
          <button className=" cursor-pointer"><Instagram/></button>
          <button className=" cursor-pointer"><Twitter/></button>
          <button className=" cursor-pointer"><Youtube/></button>
        </div>
        </div>
        <div>
          <h3 className="font-bold mb-2">About</h3>
          <a href="#" className="block mb-1">About Us</a>
          <a href="#" className="block mb-1">Delivery Information</a>
          <a href="#" className="block mb-1">Privacy Policy</a>
          <a href="#" className="block mb-1">Terms & Conditions</a>
          <a href="#" className="block mb-1">Contact Us</a>

        </div>
        <div>
          <h3 className="font-bold mb-2">My Account</h3>
          <a href="#" className="block mb-1">Sign in</a>
          <a href="#" className="block mb-1">View Cart</a>
          <a href="#" className="block mb-1">My Wishlist</a>
          <a href="#" className="block mb-1">Track My Order</a>
          <a href="#" className="block mb-1">Help</a>

        </div>
        <div>
          <h3 className="font-bold mb-2">Install App</h3>
          <img src={app} className="h-10 mb-2" />
          <img src={play} className="h-10 mb-2" />
          <p>Secured Payments Gateways</p>
            <img src={pay} className="h-10 mb-2"/>
        </div>
      </div>
      <div className="text-center text-xs mt-6">
        &copy;2025 Sherin M. All rights reserved.
      </div>
    </footer>
  );
}
