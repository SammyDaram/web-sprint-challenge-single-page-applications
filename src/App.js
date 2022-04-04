import React, {useState, useEffect} from "react";
import axios from "axios";
import * as yup from "yup";
import {Route, Link} from "react-router-dom";

import Pizza from "./Components/Pizza";
import Form from "./Components/Form";
import schema from "./Validation/formSchema";
import Home from "./Components/Home"


const App = () => {
  const initialFormValues = {
    name: '',
    size: '',
    sauce: '',
    pepperoni: false,
    sausage: false,
    canadianBacon: false,
    spicyItalianSausage: false,
    grilledChicken: false,
    onions: false,
    greenPepper: false,
    dicedTomatoes: false,
    blackOlives: false,
    roastedGarlic: false,
    artichokeHearts: false,
    threeCheese: false,
    pineapple: false,
    extraCheese: false,
    instructions: '',
  }

  const initialFormErrors = {
    name: '',
    size: '',
    sauce: '',
    instructions:''
  }
  const initialOrder = []
  const initialDisabled = true
  /* //////STATES////// */
  /* //////STATES////// */
  /* //////STATES////// */
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [orders, setOrders] = useState(initialOrder)
  const [disabled, setDisabled] = useState(initialDisabled)

  // const getOrders = () => {
  //   axios.post("https://reqres.in/api/orders")
  //     .then(res => {
  //       setOrders([res.data, ...orders]);
  //     }).catch(err => console.error(err))
  // }
  const postNewOrder = newOrder => {
    axios.post("https://reqres.in/api/orders", newOrder)
      .then(res => {
        setOrders([res.data, ...orders]);
      }).catch(err => console.error(err))
      .finally(() => setFormValues(initialFormValues))
  }
      
    
    
  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
        .then(() => setFormErrors({ ...formErrors, [name]: "" }))
        .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }
  const inputChange = (name, value) => {

    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value // NOT AN ARRAY
    })
  }

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      sauce: formValues.sauce.trim(),
      instructions: formValues.instructions.trim(),
    }
   
    postNewOrder(newOrder);
  }

  // useEffect(() => {
  //   getOrders()
  // }, [])
  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  //////////////// EVENT HANDLERS ////////////////
  //////////////// EVENT HANDLERS ////////////////
  //////////////// EVENT HANDLERS ////////////////


  return (
    <>
      <h1>Lambda Eats</h1>
      <Home 

      />
      <Form 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      <Pizza

      />
      <nav>
        <div className="nav-links">
          <Link to="/">Home</Link>
        </div>  
      </nav>
        
      
      <Route exact path="/">
        <Home />
      </Route>
      {/* <Route  exact path="/pizza-form">
        <Form />
      </Route> */}
      {/* <Route  exact path="/pizza">
        <Pizza />
      </Route> */}

    </>
  );
};
export default App;
