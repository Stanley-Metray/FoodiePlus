import img from "../images/todays-special.jpg";
import DefaultSizeFoodItem from "./DefaultSizeFoodItem";

const InMenuFoodItems = (props) => {

    window.scrollTo(0,0);
    const foodData = require(`../dataset/${props.foodType}.json`);
    return <>
        <h2 className="alert-heading text-decoration-underline pt-4 ps-2 text-dark fw-bold">{(props.foodType).charAt(0).toUpperCase()+props.foodType.slice(1)}</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 p-md-5 p-2">
            {
                foodData.recipes.map((data, index) => {
                    return <DefaultSizeFoodItem img={img} key={index} foodData={data} />
                })
            }
        </div>
    </>
}

export default InMenuFoodItems;