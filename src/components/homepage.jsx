import { Link } from "react-router-dom";
import { Pizza1 } from "../images/pizza1.jpg";

export const Homepage = () => {
    return(
        <div className="bg-cover h-fit pt-40 pb-40 mb-30 flex flex-col justify-center items-center border-b-2" 
        style=
        {{
        backgroundImage : `url(${require('../images/pizza1.jpg')})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
        }}>
            <h1 className="text-black text-5xl mb-10 md:text-white">Super Pizza</h1>
            <Link to="/menu" className="mt-5 p-5 bg-yellow-500 rounded-full hover:bg-yellow-600 transition duration-300 ease-in-out flex items-center animate-bounce">Order Now</Link>
        </div>
    );
}