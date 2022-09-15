import React, {useReducer} from "react";
import {reducer} from "./reducer";

function UncontrolledAccordion() {
    let [state, dispatch] = useReducer(reducer, {collapsed: false})
    const onClickHandler = () => {
        dispatch({type: 'TOGGLE-COLLAPSED'})
    }

    return (
        <div>
            <AccordionTitle onClick={onClickHandler}/>
            {state.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={() => {
            props.onClick()
        }}>-- Menu --</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li key={1}>1</li>
            <li key={2}>2</li>
            <li key={3}>3</li>
            <li key={4}>4</li>
        </ul>
    )
}

export default UncontrolledAccordion