import { Link } from "react-router-dom";
import { useContext } from "react";
import Burger3 from "../images/hamburger3.jpg";
import Burger4 from "../images/hamburger4.jpg";
import Pizza3 from "../images/pizza3.jpg";
import Pizza4 from "../images/pizza4.jpg";
import Pizza5 from "../images/pizza5.jpg";
import Pizza6 from "../images/pizza6.jpg";
import FrenchFries from "../images/frechfries.jpg";
import FrenchFries2 from "../images/frenchfries2.jpg";
import FrenchFries3 from "../images/frenchfries3.png";
import { OrderContext, OrderContextProvider } from "../context/orderContext";
 
export const Menu = () => {
    const {beefBurger, setBeefBurger, cheesePizza, setCheesePizza, bbWithFF, setBBWithFF, cbwithFF, setCBwithFF, greenBurger, setGreenBurger, doubleCheese, setDoubleCheese, saladPizza, setSaladPizza, greenPizza, setGreenPizza, tomatoPizza, setTomatoPizza} = useContext(OrderContext);
    return(
        <div className="pb-10">
            <h1 className="text-center pt-20 text-5xl">Today Menu</h1>
            <div className="bg-white h-fit pt-10 pb-30 mb-30 gap-3 grid grid-cols-1 gap-5 justify-center items-center border-b-2 md:grid-cols-3">
            <div className="text-center">
                <img src={Burger3} className="w-full h-64 p-3" />
                <h1 className="pb-5">Beef Burger</h1>
                <span>$10</span>
                <div className="flex justify-center pt-5">
                    <button className="p-3 bg-yellow-300 rounded-full" onClick={() => setBeefBurger(n => n + 1)}>+</button>
                    <span className="p-3">{beefBurger}</span>
                    <button className="p-3 bg-yellow-300 rounded-full" onClick={() => setBeefBurger(n => n - 1)}>-</button>
                </div>
            </div>
            <div className="text-center">
                <img src={Pizza3} className="w-full h-64 p-3" />
                <h1 className="pb-5">Cheese Pizza</h1>
                <span>$13</span>
                <div className="flex justify-center pt-5">
                    <button className="p-3 bg-yellow-300 rounded-full" onClick={() => setCheesePizza(n => n + 1)}>+</button>
                    <span className="p-3">{cheesePizza}</span>
                    <button className="p-3 bg-yellow-300 rounded-full" onClick={() => setCheesePizza(n => n - 1)}>-</button>
                </div>
            </div>
            <div className="text-center">
                <img src={Burger4} className="w-full h-64 p-3" />
                <h1 className="pb-5">Brown Burger with French Fries</h1>
                <span>$20</span>
                <div className="flex justify-center pt-5">
                    <button className="p-3 bg-yellow-300 rounded-full" onClick={() => setBBWithFF(n => n + 1)}>+</button>
                    <span className="p-3">{bbWithFF}</span>
                    <button className="p-3 bg-yellow-300 rounded-full" onClick={() => setBBWithFF(n => n - 1)}>-</button>
                </div>
            </div>
            </div>
            <div className="bg-white h-fit pt-10 pb-30 mb-30 gap-3 grid grid-cols-1 gap-5 justify-center items-center border-b-2 md:grid-cols-3">
            <div className="text-center">
                <img src={FrenchFries} className="w-full h-64 p-3" />
                <h1 className="pb-5">Classic Burger with French Fries (+ Beer)</h1>
                <span>$25</span>
                <div className="flex justify-center pt-5">
                    <button className="p-3 bg-yellow-300 rounded-full" onClick={() => setCBwithFF(n => n + 1)}>+</button>
                    <span className="p-3">{cbwithFF}</span>
                    <button className="p-3 bg-yellow-300 rounded-full" onClick={() => setCBwithFF(n => n - 1)}>-</button>
                </div>
            </div>
            <div className="text-center">
                <img src={FrenchFries2} className="w-full h-64 p-3" />
                <h1 className="pb-5">Green Burger + Beer</h1>
                <span>$15</span>
                <div className="flex justify-center pt-5">
                    <button className="p-3 bg-yellow-300 rounded-full" onClick={() => setGreenBurger(n => n + 1)}>+</button>
                    <span className="p-3">{greenBurger}</span>
                    <button className="p-3 bg-yellow-300 rounded-full" onClick={() => setGreenBurger(n => n - 1)}>-</button>
                </div>
            </div>
            <div className="text-center">
                <img src={FrenchFries3} className="w-full h-64 p-3" />
                <h1 className="pb-5">Double Cheese Fries</h1>
                <span>$27</span>
                <div className="flex justify-center pt-5">
                    <button className="p-3 bg-yellow-300 rounded-full" onClick={() => setDoubleCheese(n => n + 1)}>+</button>
                    <span className="p-3">{doubleCheese}</span>
                    <button className="p-3 bg-yellow-300 rounded-full" onClick={() => setDoubleCheese(n => n - 1)}>-</button>
                </div>
            </div>
            </div>
            <div className="bg-white h-fit pt-10 pb-30 mb-30 gap-3 grid grid-cols-1 gap-5 justify-center items-center border-b-2 md:grid-cols-3">
            <div className="text-center">
                <img src={Pizza4} className="w-full h-64 p-3" />
                <h1 className="pb-5">Salad Pizza</h1>
                <span>$13</span>
                <div className="flex justify-center pt-5">
                    <button className="p-3 bg-yellow-300 rounded-full" onClick={() => setSaladPizza(n => n + 1)}>+</button>
                    <span className="p-3">{saladPizza}</span>
                    <button className="p-3 bg-yellow-300 rounded-full" onClick={() => setSaladPizza(n => n - 1)}>-</button>
                </div>
            </div>
            <div className="text-center">
                <img src={Pizza5} className="w-full h-64 p-3" />
                <h1 className="pb-5">Green Pizza</h1>
                <span>$17</span>
                <div className="flex justify-center pt-5">
                    <button className="p-3 bg-yellow-300 rounded-full" onClick={() => setGreenPizza(n => n + 1)}>+</button>
                    <span className="p-3">{greenPizza}</span>
                    <button className="p-3 bg-yellow-300 rounded-full" onClick={() => setGreenPizza(n => n - 1)}>-</button>
                </div>
            </div>
            <div className="text-center">
                <img src={Pizza6} className="w-full h-64 p-3" />
                <h1 className="pb-5">Tomato Pizza</h1>
                <span>$15</span>
                <div className="flex justify-center pt-5">
                    <button className="p-3 bg-yellow-300 rounded-full" onClick={() => setTomatoPizza(n => n + 1)}>+</button>
                    <span className="p-3">{tomatoPizza}</span>
                    <button className="p-3 bg-yellow-300 rounded-full" onClick={() => setTomatoPizza(n => n + 1)}>-</button>
                </div>
            </div>
            </div>
        </div>
    );
}