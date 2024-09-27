
import React ,{Component}from 'react';
import Navigation from './components/Navigation';
import './App.css'
import style from './App.css';
import './components/Navigation.module.css'
import { Category } from './components/Category';
import { slides } from './assets/slideData';


const App = () => {
    return (
        <div  className='containerHead' >
            <div className='container'>
                <div>
                <Navigation className='navi'/>
                </div>
                {/* <Slide data={slides}/> */}
                <Category images={slides}/>
           </div>
        </div>
    );
}

export default App