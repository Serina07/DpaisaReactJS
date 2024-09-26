import './App.css'
import style from './App.css';
import './components/Navigation.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React ,{Component}from 'react';
import Navigation from './components/Navigation';
import Slide from './components/Slide';
import { slides } from './data/slideData';


const App = () => {
    return (
        <div  className='containerHead' >
            <div className='container'>
                <div>
                <Navigation className='navi'/>
                </div>
                <Slide data={slides}/>
           </div>
        </div>
    );
}

export default App