import Cookies from 'js-cookie';
import React from "react";
import {Link} from "react-router-dom";

const DefaultSizeFoodItem = (props) => {

    const img = require("../images/"+props.foodData.name+".jpg");

    return <>
        <div className="col">
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body d-flex flex-row justify-content-between align-items-center">
                    <h5 className="card-title">{props.foodData.name}</h5>
                    <Link data-bs-name={props.foodData} onClick={()=>{
                       Cookies.set("foodData", JSON.stringify(props.foodData));
                    }} className="btn btn-primary rounded-pill pe-3 ps-3" to="/recipe" type="button">Recipe</Link>
                </div>
                <div className="card-footer text-success">{props.foodData.country}</div>
            </div>
        </div>
    </>
}

export default DefaultSizeFoodItem;