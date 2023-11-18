import Burger2 from "../images/hamburger2.jpg";

export const About = () => {
    return(
        <div className="mt-5 mb-5">
            <h1 className="text-center text-5xl">About Us</h1>
            <div className="pt-10 flex flex-col place-items-center gap-3 md:flex-row">
                <img src={Burger2} className="rounded shadow m-3" style={{width: "50%"}} />
                    <div className="flex flex-col mt-5 items-center p-10">
                        <h1 className="text-3xl pb-5">What makes us Unique?</h1>
                        <p>Welcome to our one-of-a-kind pizza paradise! What sets our pizza shop apart is a delightful combination of our handcrafted pizzas, personalized touch, and commitment to sustainability. Each pizza is meticulously made with love and passion, using the freshest locally sourced ingredients, ensuring that every bite bursts with authentic flavors. But what truly makes us unique is our dedication to customizing pizzas to suit your taste buds perfectly. You have the freedom to create your own masterpiece, choosing from an array of premium toppings and artisanal sauces. Beyond taste, we take pride in being an eco-conscious establishment, implementing innovative green practices like compostable packaging and supporting local farmers. At our pizza shop, we aim to not just serve delicious pizzas but to create an unforgettable and environmentally responsible dining experience for our cherished customers.</p>
                    </div>
            </div>
        </div>
    );
}