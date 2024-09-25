import './App.css';
import React ,{Component}from 'react';
import Navigation from './components/Navigation';
import Slide from './components/Slide';
import { slides } from './data/slideData';

const App = () => {
    return (
        <div>
           <Navigation/>
           <Slide data={slides}/>
        </div>
    );
}

export default App