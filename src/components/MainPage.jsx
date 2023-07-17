import MainPageFoodItems from "./MainPageFoodItems";

const MainPage = (props) => {
    const foodData = require(`../dataset/mainpagefooditems.json`);

    const arr = new Array([]);

    foodData.allFoods.recipes.forEach((value, index) => {
        arr.push(value);
    });

    return <>
        <header className="p-4">
            <p> Foodie+</p>
            <p style={{ textAlign: "center" }}>Unleash your culinary creativity and embark on a flavor-filled journey with our extraordinary food recipes</p>
            <a href="#all-foods" className="btn text-light rounded-5 px-5">Explore</a>
        </header>
        <div id="all-foods">
        {
            arr.map((data, index) => {
                let result;
                if (index !== 0)
                    if (parseInt(index % 2) === 0) 
                        result = <MainPageFoodItems foodData={data} flexRowClass="flex-row-reverse" key={index} />
                    else
                        result = <MainPageFoodItems foodData={data} flexRowClass="" key={index} />
                
                return result;
            })
        }
        </div>
    </>
}

export default MainPage;