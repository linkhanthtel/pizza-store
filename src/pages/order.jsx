import { useContext } from "react";
import { OrderContext, OrderContextProvider } from "../context/orderContext";

export const Order = () => {
    const {beefBurger, setBeefBurger, cheesePizza, setCheesePizza, bbWithFF, setBBWithFF, cbwithFF, setCBwithFF, greenBurger, setGreenBurger, doubleCheese, setDoubleCheese, saladPizza, setSaladPizza, greenPizza, setGreenPizza, tomatoPizza, setTomatoPizza} = useContext(OrderContext);

    return(
        <div className="pt-40 pb-900 border-2 border-black">
            <h1 className="pb-5 text-center text-5xl">🍽️ Your Order : </h1>
            <div className="flex flex-col mt-5 text-center">
                <p className="p-5 bg-gray-300 rounded-md m-5">{`${beefBurger}x Beef Burger 🍔`}</p>
                <p className="p-5 bg-gray-300 rounded-md m-5">{`${cheesePizza}x Cheese Pizza 🍕`}</p>
                <p className="p-5 bg-gray-300 rounded-md m-5">{`${bbWithFF}x Brown Burger with French Fries 🍔🍟`}</p>
                <p className="p-5 bg-gray-300 rounded-md m-5">{`${cbwithFF}x Classic Burger with French Fries + Beer 🍔🍟`}</p>
                <p className="p-5 bg-gray-300 rounded-md m-5">{`${greenBurger}x Green Burger + Beer 🍔🍺`}</p>
                <p className="p-5 bg-gray-300 rounded-md m-5">{`${doubleCheese}x Double Cheese Fries🍟🍟`}</p>
                <p className="p-5 bg-gray-300 rounded-md m-5">{`${saladPizza}x Salad Pizza 🍕`}</p>
                <p className="p-5 bg-gray-300 rounded-md m-5">{`${greenPizza}x Green Pizza 🍕`}</p>
                <p className="p-5 bg-gray-300 rounded-md m-5">{`${tomatoPizza}x Tomato Pizza 🍕`}</p>
            </div>
            <h1 className="text-center text-5xl pt-10 pb-10">{`Thanks for visiting Pizza Paradise!`}</h1>
        </div>
    );
}