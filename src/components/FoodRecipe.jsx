import Cookies from 'js-cookie';

const FoodRecipe = () => {
    window.scrollTo(0,0);
    const foodData = JSON.parse(Cookies.get('foodData'));
    const img = require("../images/"+foodData.name+".jpg");
    return <div className="container bg-light h-auto rounded pt-5">
        <img src={img} alt="food.jpg" className="w-100 shadow rounded" style={{ height: "400px", objectFit: "cover" }} />
        <h1 className="display-6 text-dark mb-4 mt-3 p-1">{foodData.name}</h1>
        <h4 className="mt-4 ps-3">Ingredients</h4>
        <ul className="ingredients list-unstyled bg-light text-dark p-2 ps-5">
            {
                foodData.ingredients.map((value, index) => {
                    return <li className="my-2" key={index}>{value}</li>
                })
            }
        </ul>
        <h4 className="mt-4 mb-4 ps-3">Instructions</h4>
        <div className="pb-5">
            <table className="table table-light table-striped-columns">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Steps to perform</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        foodData.instructions.map((value, index) => {
                            return <tr key={index}>
                                <td>{++index}</td>
                                <td>{value}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
}

export default FoodRecipe;