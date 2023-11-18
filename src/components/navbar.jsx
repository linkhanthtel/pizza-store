import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return(
        <div className="flex justify-between fixed w-screen z-10 px-3 pt-6 pb-4 bg-black text-white shadow-2xl">
            <div>
                <Link to="/">🍕 Pizza Paradise</Link>
            </div>
            <div className="hidden md:flex">
                <Link to="/" className="pl-4">Home</Link>
                <Link to="/menu" className="pl-4">Menu</Link>
                <Link to="/myorder" className="pl-4">Your Order</Link>
            </div>
            <div className="cursor-pointer hidden md:flex">
                <button onClick={() => {alert("For any concerns, kindly reach me via linkhanthtel@icloud.com")}}>Support</button>
            </div>
            <div className="md:hidden">
            { toggle ? 
            <div className="relative bg-black flex flex-col w-64 h-96 text-center md:hidden" onMouseLeave={() => setToggle(false)}>
                <button className="pb-10" onClick={() => setToggle(false)}>|||</button>
                <Link to="/" className="pt-5 pb-5 hover:border-b-2 border-white">Home</Link>
                <Link to="/menu" className="pt-5 pb-5 hover:border-b-2 border-whit">Menu</Link>
                <Link to="/myorder" className="pt-5 pb-5 hover:border-b-2 border-whit">Your Order</Link>
                <button className="pt-5 pb-5 hover:border-b-2 border-whit" onClick={() => {alert("For any concerns, kindly reach me via linkhanthtel@icloud.com")}}>Support</button>
            </div> 
            : <button onClick={() => setToggle(true)}>| | |</button>}
            </div>
        </div>
    );
}