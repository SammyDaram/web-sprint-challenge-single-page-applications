import React from "react";
import { useHistory } from "react-router-dom";
// import history from '../../history';

const Home = () => {
    const history = useHistory();
    return (
        <div >
            <h2>Your favorite food, delivered while coding</h2>
            <img 
                className="home-image"
                src=""
                alt=""
            />
            <button
               id="order-pizza"
               onClick={()=> {
                   history.push('./pizza');
               }}
            >
                Order Pizza
            </button>
        </div>
    )
}

export default Home



