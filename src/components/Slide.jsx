import React, {useState} from "react";
// import Slide from 'react-bootstrap/Sile'
import classNames from "classnames";
import style from "./slide.module.css";
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs';

const Slide = ({data}) => {
    const [slider, setSlide] = useState(0);

    //Next and previous slide handlers
    const nextSlide = () => {
        setSlide(slider === data.length -1 ? 0 : slider + 1);
        
    }
    const prevSlide = () => {
        setSlide(slider === 0 ? data.length -1 : slider -1);
        
    }
    return (
        <div className={style.slideContainer}>

            {/* Left arrow */}
            <BsArrowLeftCircleFill 
            className={classNames(style.arrow ,style.arrowLeft)}
             onClick={prevSlide}
            />

            {/* Slides  */}
            <div 
            className={style.slides}
            style= {{transform: 'translateX(-${slider * 100}%)'}}  //Sliding animation 
            > 
            {/* {data.map((item,index) => (
                <img 
                src={item.src} 
                alt={item.alt}
                key= {index}
                className={style.image}
                 />
            ))} */}
            </div>
             
            {data.map((item,index) => {
                return <img 
                src={item.src} 
                alt={item.alt} 
                key={index} 
                className={classNames((slider === index) ? style.image : `${style.image} ${style.hiddenImage}`)}/>;
            })}


            <BsArrowRightCircleFill className={classNames(style.arrow ,style.arrowRight)}
            onClick={nextSlide}
            />
            
            <span className={style.indicators}>
                {data.map((_,index) => {
                    return <button key={index} 
                    onClick={() => {setSlide(index)}} 
                    className={classNames((slider === index) ? style.indicator : `${style.indicator} ${style.inactiveIndicator}`)}></button>
                })}
            </span>
        </div>
    );
}

export default Slide