import * as yup from "yup";

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required("name is required!")
        .min(3, "name must be three characters long"),
    size: yup
        .required("size is required"),
    sauce: yup
        .string()
        .oneOf(["Original Red", "Garlic Ranch", "BBQ Sauce", "Spinach Alfredo"], "You can only pick one")
        .required("sauce is required"),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    canadianBacon: yup.boolean(),
    spicyItalianSausage: yup.boolean(),
    grilledChicken: yup.boolean(),
    onions: yup.boolean(),
    greenPepper: yup.boolean(),
    dicedTomatoes: yup.boolean(),
    blackOlives: yup.boolean(),
    roastedGarlic: yup.boolean(),
    artichokeHearts: yup.boolean(),
    threeCheese: yup.boolean(),
    pineapple: yup.boolean(),
    extraCheese: yup.boolean()
})

export default formSchema