'use client';
import HomeSection from "./HomeSection";
import Awards from "./Awards";
import Footer from "./Footer";
import Result from "./Result";
import AppBar from "./AppBar/AppBar";
import AppControlsCounter from "./AppControls/AppControlsCounter";
import AppControlsInputs from "./AppControls/AppControlsinputs";
import React, {useState, useEffect} from "react";
import AppMealsList from "./AppMealsList/AppMealsList";





const HomePage = () => {
  const[meals, setMeals] = useState ([]);
  const [mealName,setMealName] = useState("");
  const [calories, setCalories] = useState (0);
  const [openModal, setOpenModal] = useState(false);

  const addMealsHandler =()=> {
    const oldMeals = [...meals];
    const meal = {
      mealName,
      calories,
      id:Math.floor(Math.random()*1000),
    };

    const newMeals = oldMeals.concat(meal);

    if(calories <=0 || mealName === "" ){
      alert("must not be empty")
     } else {
      setMeals(newMeals)
     }

     setMealName("");
     setCalories(0);


    
  };

  return (
    <div className="overflow-x-hidden">
    <HomeSection />
    <Awards />
    <AppBar/>
    <AppControlsCounter/>
    <AppControlsInputs addMealsHandler={addMealsHandler} mealName={mealName} calories ={calories}
    setMealName={setMealName} setCalories={setCalories}/>
    <div className="app__meals__container">
      <AppMealsList meals={meals}/>
    </div>
    <Result/>
    <Footer/>

    </div>
  );
};

export default HomePage;

