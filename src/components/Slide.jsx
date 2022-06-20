import React, {useState} from 'react'
import BtnSlider from './BtnSlider'
import '../styles/slide.css'


function Slide(props) {
    
  const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== props.picture.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === props.picture.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(props.picture.length)
        }
    }

    return (
        <div className="container-slider">
            {props.picture.map((obj, index) =>
                <div key={`${obj}-${index}`} className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                    <img src={obj}/>
                </div>
            )}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
            <div className={'slideshow-idx'}>{slideIndex} / {props.picture.length}</div>
        </div>
    )
}

export default Slide
