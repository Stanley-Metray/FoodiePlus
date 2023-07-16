import DefaultSizeFoodItem from "./DefaultSizeFoodItem"

const MainPageFoodItems = (props) => {
    window.scrollTo(0,0);
    const img = require("../images/"+props.foodData[0].name+".jpg");
    const title = props.foodData[0].title;

    return <>
        <div style={{background:"#f5f6fa", boxShadow:"rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"}} className="pt-4 mx-lg-2 rounded-lg my-lg-5">
            <div className={`row row-cols-1 row-cols-lg-2 g-4 p-4 d-flex align-items-center ${props.flexRowClass}`}>
                <div className="col">
                <h1 className="title text-dark text-center ps-4 pb-5" style={{ textDecoration: "underline",fontFamily: "'Lobster', cursive", fontSize: "32px" }}>{title}</h1>
                    <div className="card">
                        <img src={img} className="card-img-top custome-card-image" alt="..." />
                        <div className="card-body d-flex flex-row justify-content-between">
                            <h5 className="card-title h3">{props.foodData[0].name}</h5>
                            <a style={{ fontSize: "larger" }} className="btn btn-primary rounded-pill pe-4 ps-4" href="#" type="button">Recipe</a>
                        </div>
                        <div className="card-footer text-success">{props.foodData[0].country}</div>
                    </div>
                </div>
                <div className="col">
                    <div className="row row-cols-1 row-cols-2 g-4">
                        {
                            props.foodData.map((data, index) => {
                                if (index > 0)
                                    return <DefaultSizeFoodItem img={img} key={index} foodData={data} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
}


export default MainPageFoodItems;