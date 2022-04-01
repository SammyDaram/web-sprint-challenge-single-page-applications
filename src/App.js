import React, {useState} from "react";
// import axios from "axios";
import * as yup from "yup";
import {Route, Link} from "react-router-dom";

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
  /* //////STATES////// */
  /* //////STATES////// */
  /* //////STATES////// */
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
        .then(() => setFormErrors({ ...formErrors, [name]: "" }))
        .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  //////////////// EVENT HANDLERS ////////////////
  //////////////// EVENT HANDLERS ////////////////
  //////////////// EVENT HANDLERS ////////////////
  const inputChange = (name, value) => {
    // 🔥 STEP 10- RUN VALIDATION WITH YUP
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value // NOT AN ARRAY
    })
  }
  return (
    <>
      <h1>Lambda Eats</h1>
      <Home 

      />
      <Form 
        values={formValues}
        change={inputChange}
        errors={formErrors}
      />
      <nav>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/order">Form</Link>
        </div>
        
      </nav>
      <Route exact path="/">
        <Home />
      </Route>
    </>
  );
};
export default App;
