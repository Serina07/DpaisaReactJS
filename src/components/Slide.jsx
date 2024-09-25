import classNames from "classnames";
import style from "./slide.module.css";
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs';

const Slide = ({data}) => {
    return (
        <div className={style.slide}>
            <BsArrowLeftCircleFill className={classNames(style.arrow ,style.arrowLeft)}/>
            {data.map((item,index) => {
                return <img src={item.src} alt={item.alt} key={index} 
                className={style.image}/>;
            })}
            <BsArrowRightCircleFill/>
            <span >
                {data.map((_,index) => {
                    return <button key={index} onClick={null}></button>
                })}
            </span>
        </div>
    );
}

export default Slide