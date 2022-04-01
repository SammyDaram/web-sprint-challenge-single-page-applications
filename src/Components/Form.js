import React from "react";

const Form = (props) => {
    const {values, submit, change} = props;

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, checked, type} = evt.target
        const valueToUse = type === "checkbox" ? checked : value
        change(name, valueToUse)
    }
    return (
        <form className="form container" onSubmit={onSubmit}>

            <div>
                <h1>Build your own pizza</h1>
                <h1>Build Your Own Pizza</h1>
                {/* //////drop down for your size of pizza////// */}
                {/* //////drop down for your size of pizza////// */}
                {/* //////drop down for your size of pizza////// */}
                <label>Choice of Size
                    <select value={values.size} name="size" onChange={onChange}>
                        <option value="">-- Select --</option>
                        <option value="Small">Student</option>
                        <option value="Medium">Instructor</option>
                        <option value="Large">Alumni</option>
                    </select>
                </label>
                {/* //////Radio Buttons////// */}
                {/* //////Radio Buttons////// */}
                {/* //////Radio Buttons////// */}
                <label>Choice of Sauce

                    <label>Original Red
                        <input
                            type="radio"
                            name="sauce"
                            value="originalRed"
                            onChange={onChange}
                            checked={values.sauce === "originalRed"}
                        />
                    </label>
                                
                    <label>Garlic Ranch
                        <input
                            type="radio"
                            name="sauce"
                            value="garlicRanch"
                            onChange={onChange}
                            checked={values.sauce === "garlicRanch"}
                        />
                    </label>

                    <label>BBQ Sauce
                        <input
                            type="radio"
                            name="sauce"
                            value="BBQ Sauce"
                            onChange={onChange}
                            checked={values.sauce === "BBQ Sauce"}
                        />
                    </label>

                    <label>Spinach Alfredo
                        <input
                            type="radio"
                            name="sauce"
                            value="spinachAlfredo"
                            onChange={onChange}
                            checked={values.sauce === "spinachAlfredo"}
                        />
                    </label>

                </label>
                {/* //////CHECKBOXES////// */}
                {/* //////CHECKBOXES////// */}
                {/* //////CHECKBOXES////// */}
                <label>Add Toppings


                    <label>Pepperoni
                        <input
                            type="checkbox"
                            name="pepperoni"
                            onChange={onChange}
                            checked={values.pepperoni}
                        />
                    </label>

                    <label>Sausage
                        <input
                            type="checkbox"
                            name="sausage"
                            onChange={onChange}
                            checked={values.sausage}
                        />
                    </label>

                    <label>Canadian Bacon
                        <input
                            type="checkbox"
                            name="canadianBacon"
                            onChange={onChange}
                            checked={values.canadianBacon}
                        />
                    </label>

                    <label>Spicy Italian Sausage
                        <input
                            type="checkbox"
                            name="spicyItalianSausage"
                            onChange={onChange}
                            checked={values.spicyItalianSausage}
                        />
                    </label>

                    <label>Grilled Chicken
                        <input
                            type="checkbox"
                            name="grilledChicken"
                            onChange={onChange}
                            checked={values.grilledChicken}
                        />
                    </label>

                    <label>Onions
                        <input
                            type="checkbox"
                            name="onions"
                            onChange={onChange}
                            checked={values.onions}
                        />
                    </label>

                    <label>Green Pepper
                        <input
                            type="checkbox"
                            name="greenPepper"
                            onChange={onChange}
                            checked={values.greenPepper}
                        />
                    </label>

                    <label>Diced Tomatoes
                        <input
                            type="checkbox"
                            name="diced Tomatoes"
                            onChange={onChange}
                            checked={values.dicedTomatoes}
                        />
                    </label>

                    <label>Black Olives
                        <input
                            type="checkbox"
                            name="blackOlives"
                            onChange={onChange}
                            checked={values.blackOlives}
                        />
                    </label>

                    <label>Roasted Garlic
                        <input
                            type="checkbox"
                            name="roastedGarlic"
                            onChange={onChange}
                            checked={values.roastedGarlic}
                        />
                    </label>

                    <label>Artichoke Hearts
                        <input
                            type="checkbox"
                            name="artichokeHearts"
                            onChange={onChange}
                            checked={values.artichokeHearts}
                        />
                    </label>

                    <label>Three Cheese
                        <input
                            type="checkbox"
                            name="threeCheese"
                            onChange={onChange}
                            checked={values.threeCheese}
                        />
                    </label>

                    <label>Pineapple
                        <input
                            type="checkbox"
                            name="pineapple"
                            onChange={onChange}
                            checked={values.pineapple}
                        />
                    </label>

                    <label>Extra Cheese
                        <input
                            type="checkbox"
                            name="extraCheese"
                            onChange={onChange}
                            checked={values.extraCheese}
                        />
                    </label>

                
                </label>
                {/* //////Special Instructions Texts////// */}
                {/* //////Special Instructions Texts////// */}
                {/* //////Special Instructions Texts////// */}

                <label>Special Instructions&nbsp;
                    <input
                        value={values.instructions}
                        onChange={onChange}
                        name='instructions'
                        type='text'
                        placeholder="Anything else you'd like to add?"
                    />
                </label>  
            </div>

        </form>
              
    )
}

export default Form;