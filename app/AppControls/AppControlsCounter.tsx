import React from 'react';

const AppControlsCounter = () => {
  return (
    <div className='app__controls__counter'>
      <h2>Total Calories: <span>0</span></h2>
      <div className='app__controls__delete rounded dark:text-stone-600 justify-around'><button className='btn__delete__all bg-white border-violet-500 dark:border-white dark:bg-stone-500 my-3 dark:text-white border '>DELETE ALL</button></div>


    </div>
    
  );
};

export default AppControlsCounter