import React from 'react'

const AppMealsList = ({ meals }) => {
  return (
    <div className='app__meals__container__wrapper dark:bg-stone-400'>
      {meals.map((meal, index) => (
        <div key={index} className="app__meals__container__wrapper__inner bg-violet-400 text-white dark:bg-stone-700 dark:text-white">
          <div>{`${meal.mealName} : ${meal.calories}`}</div>
          <div>
            <button className='btn__delete__meal '>Delete</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AppMealsList
