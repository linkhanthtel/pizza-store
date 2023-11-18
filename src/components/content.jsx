import Pizza1 from "../images/pizza1.jpg";
import Pizza2 from "../images/pizza2.jpg";
import Burger1 from "../images/hamburger1.jpg";

export const Content = () => {
    return(
        <div className="flex flex-col items-center">
            <h1 className="text-center text-5xl py-5">Today Special</h1>
            <div className="flex flex-col justify-center items-center border-b-2 pb-10">
                <img src={Pizza1} alt="Pizza1" className="rounded shadow m-3" style={{width: "60%"}} />
                <div className="flex flex-col mt-5 items-center">
                    <h1>Tomato Spicy Pizza</h1>
                    <span>$25</span>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center border-b-2 pb-10">
                <img src={Burger1} alt="Burger1" className="rounded shadow m-3" style={{width: "60%"}} />
                <div className="flex flex-col mt-5 items-center">
                    <h1>Reo Burger</h1>
                    <span>$20</span>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center border-b-2 pb-10">
                <img src={Pizza2} alt="Pizza2" className="rounded shadow m-3" style={{width: "60%"}} />
                <div className="flex flex-col mt-5 items-center">
                    <h1>Tomato Pizza</h1>
                    <span>$20</span>
                </div>
            </div>
        </div>
    );
}