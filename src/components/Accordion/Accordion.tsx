import React from "react";

type AccordionPropsType = {
    collapsed: boolean
    onClick: () => void
    items: string[]
}

function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle onClick={props.onClick}/>
            {props.collapsed && <AccordionBody items={props.items}/>}
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

type AccordionBodyPropsType = {
    items: string[]
}

function AccordionBody (props: AccordionBodyPropsType) {
    return (
        <ul>
            { props.items.map( i => <li>{i}</li>) }
        </ul>
    )
}

export default Accordion