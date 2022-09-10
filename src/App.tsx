import React, {MouseEvent} from 'react';
import './App.css';
import OnOff from "./components/OnOff";
import {useState} from "react";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import Accordion from "./components/Accordion/Accordion";
import Rating, {RatingValueType} from "./components/Rating/Rating";


function App() {
    const [state, setState] = useState<boolean>(false)
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const [ratingValue, setRatingValue] = useState<RatingValueType>(1)
    const switcher = () => {
        setState(!state)
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            margin: '0 auto',
            alignItems: 'center',
            paddingTop: '15px'
        }}>
            <OnOff switcher={switcher} state={state}/>
            <UncontrolledAccordion/>
            <UncontrolledRating/>
            <Accordion collapsed={collapsed} onClick={() => {setCollapsed(!collapsed)}}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
        </div>
    )
}


export default App;
