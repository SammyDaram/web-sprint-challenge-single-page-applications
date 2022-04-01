import React from "react";

const Home = () => {
    const routeToOrder = () => {
        
    }
    return (
        <div >
            <h2>Your favorite food, delivered while coding</h2>
            <img 
                className="home-image"
                src=""
                alt=""
            />
            <button
                onClick={routeToOrder}
                id="order-pizza"
            >
                Order Pizza?
            </button>
        </div>
    )
}

export default Home