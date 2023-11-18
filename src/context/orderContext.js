import { createContext, useState } from "react";

export const OrderContext = createContext(null);

export const OrderContextProvider = ({children}) => {
    const [beefBurger, setBeefBurger] = useState(0);
    const [cheesePizza, setCheesePizza] = useState(0);
    const [bbWithFF, setBBWithFF] = useState(0);
    const [cbwithFF, setCBwithFF] = useState(0);
    const [greenBurger, setGreenBurger] = useState(0);
    const [doubleCheese, setDoubleCheese] = useState(0);
    const [saladPizza, setSaladPizza] = useState(0);
    const [greenPizza, setGreenPizza] = useState(0);
    const [tomatoPizza, setTomatoPizza] = useState(0);

    return(
        <OrderContext.Provider value={{beefBurger, setBeefBurger, cheesePizza, setCheesePizza, bbWithFF, setBBWithFF, cbwithFF, setCBwithFF, greenBurger, setGreenBurger, doubleCheese, setDoubleCheese, saladPizza, setSaladPizza, greenPizza, setGreenPizza, tomatoPizza, setTomatoPizza}}>
            {children}
        </OrderContext.Provider>
    );
}