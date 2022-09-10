import React from "react";

type AccordionPropsType = {
    collapsed: boolean
    onClick: () => void
}

function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle onClick={props.onClick}/>
            {props.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    onClick: () => void
}

function AccordionTitle (props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.onClick}>-- Menu --</h3>
    )
}

function AccordionBody () {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    )
}

export default Accordion