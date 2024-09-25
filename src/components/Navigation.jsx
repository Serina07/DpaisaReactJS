import React,{Component} from "react"
import style from "./Navigation.module.css"
const Navigation = () => {

    return (
         <nav className={style.container}>
                <div
                    className={style.logo}>
                    <img src="/images/Dpaisa 1.png" alt="logo" />
                </div>
                <ul className={style.NAVBAR}>
                    <li href="#"> Home</li>
                    <li href="#"> Services</li>
                    <li href="#"> Privacy Policy</li>
                    <li href="#"> FAQs</li>
                    <li href="#"> Support </li>
                    <li href="#"> About Us </li>
                </ul>
                <div className = {style.BUTTON12}>  
                    <button className = {style.b1}>
                        Login
                    </button>
                    <button className = {style.b2}>
                        Sign Up
                    </button>
                </div>

            </nav>
    )
}

export default Navigation