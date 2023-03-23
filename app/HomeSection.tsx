import React from 'react';

const HomeSection = () => {
  return (
    <div id="home" className='home-section-container'>
      <div className='text'>
        <h1 className="text-plain">
          VIEW <p>YOUR</p> <p>PROGRESS</p>
        </h1>
        <p>THE BEST DECISION FOR YOUR BODY</p>
        <p>YOUR NO 1 FAT BURNING APP </p>
      </div>
      <div className='picture'>
        <img className="home-section-image" src="./apppic.png" />
      </div>
    </div>
  );
};

export default HomeSection;
