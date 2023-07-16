import './App.css';
import Menu from "./components/Menu";
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import InMenuFoodItems from './components/InMenuFoodItems';
import { Routes, Route } from 'react-router-dom';
import FoodRecipe from './components/FoodRecipe';
import MainPage from './components/MainPage';

function App() {
  return <>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route exact path="/" element={<MainPage/>}/>
        <Route exact path="/breakfast" element={<InMenuFoodItems foodType="breakfast" />} />
        <Route exact path="/lunch" element={<InMenuFoodItems foodType="lunch" />} />
        <Route exact path="/dinner" element={<InMenuFoodItems foodType="dinner" />} />
        <Route exact path="/snacks" element={<InMenuFoodItems foodType="snacks" />} />
        <Route exact path="/vegetarian" element={<InMenuFoodItems foodType="vegetarian" />} />
        <Route exact path="/recipe" element={<FoodRecipe/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
}

export default App;
