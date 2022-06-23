import React from "react";
import '../styles/slide.css';
import leftArrow from "../assets/icons/left-arrow.png";
import rightArrow from "../assets/icons/right-arrow.png";

export default function BtnSlider({ direction, moveSlide, numberPictures}) {
  // Condition qui me permet d'afficher les chevrons uniqt qd il y a plusieurs images
  if(numberPictures > 1){
    return (
      <button onClick={moveSlide} className={direction === "next" ? "btn-slide next" : "btn-slide prev"}>
        <img src={direction === "next" ? rightArrow : leftArrow} alt={direction}/>
      </button>
    );
  }
  
}