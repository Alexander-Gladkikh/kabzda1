import React, {MouseEvent} from 'react';
import './App.css';
import OnOff from "./components/OnOff/OnOff";
import {useState} from "react";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import Accordion from "./components/Accordion/Accordion";
import Rating, {RatingValueType} from "./components/Rating/Rating";
import {Select} from "./components/Select/Select";


function App() {
    const [state, setState] = useState<boolean>(false)
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const [ratingValue, setRatingValue] = useState<RatingValueType>(1)
    const [select, setSelect] = useState<boolean>(true)
    const [selectValue, setSelectValue] = useState('no-name')

    let items = [{title: 'Dima', value: 1},
        {title: 'Valera', value: 2},
        {title: 'Margo', value: 3},
        {title: 'Sasha', value: 4},
    ]

    const onClickCollapsed = () => {
        setSelect(!select)
    }

    const onBlurCollapsed = () => {
        alert('sdb')
        select && setSelect(false)
    }

    const callbackSelectValue = (value: string) => {
        setSelectValue(value)
    }

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
        <Accordion collapsed={collapsed} onClick={() => {
            setCollapsed(!collapsed)
        }} items={[]}/>
        <Rating value={ratingValue} onClick={setRatingValue}/>
        <Select onBlurCollapsed={onBlurCollapsed} onChange={callbackSelectValue} items={items} select={select} onClickCollapsed={onClickCollapsed} selectValue={selectValue}/>
    </div>
)
}


export default App;
