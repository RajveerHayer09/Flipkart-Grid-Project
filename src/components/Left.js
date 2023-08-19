import React from 'react';
import './Left.css'
// import logo from './fashionImage.jpg'
// const imgsrc = "../public/fashionImage.jpg"

const Left = () => {
  return (
    <div className="left">
      <img src={process.env.PUBLIC_URL +'/fashionImage.jpg'} alt="Fashion Image" className="left-image" />
      <div className="image-overlay">
        <div className="image-text">
          Write the type of fashion you want to see in the search bar at the top.
        </div>
      </div>
    </div>
  );
}

export default Left;
