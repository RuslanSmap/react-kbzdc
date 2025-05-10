import React from 'react';
import logo from './logo.svg';
import './App.css';

function hello() {
    alert('Hello IT-Kamasutra')
}


function App() {
    console.log('App rendering')
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    );
}

function AppTitle() {
    console.log('AppTitle rendering')
    return <>
        This is APP component
    </>
}

function Rating() {
    console.log('Rating rendering')
    return (
        <>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </>
    )
}

function Accordion() {
    console.log('Accordion rendering')
    return (
        <div>
            <AccordionTiltle/>
            <AccordionBody/>
        </div>
    )
}

function AccordionTiltle() {
    console.log('AccordionTiltle rendering')
    return (
        <>
            <h3>Меню</h3>
        </>
    )
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

function Star() {
    console.log('Star rendering')
    return (
        <div>star</div>
    )
}

export default App;
