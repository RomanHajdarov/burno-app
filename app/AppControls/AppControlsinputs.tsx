import React from 'react';

const AppControlsInputs = ({addMealsHandler, calories, mealName, setCalories, setMealName}) => {
  const onAddMealsClick =() => {
    addMealsHandler();
  }
  return (
    <div className="app__controls rounded py-5 mx-0 relative flex-1 overflow-y-scroll scrollbar-hide bg-violet-200 dark:bg-stone-400  dark:text-stone-600 flex justify-around">
    <div className="app__controls__inputs">

      <input type="text " 
      placeholder='Meal ' 
      value={mealName} onChange={(e) => setMealName (e.target.value)}/>
      <input type="number"
      placeholder="Calories" value={calories} onChange={(e) => setCalories (e.target.value)}
      min={0} />
      <button onClick={onAddMealsClick} className='mx-10 px-5 py-5 rounded-xl  dark:text-zinc-700 border-spacing-2 border'>Add Meal</button>
    </div>
    </div>
  );
};

export default AppControlsInputs;