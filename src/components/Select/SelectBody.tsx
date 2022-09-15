import React from "react";
import {ItemType} from "./Select";

type SelectBodyPropsType = {
    items: ItemType[]
    callbackSelectValue: (value: string) => void
    onClickCollapsed: () => void
}

export function SelectBody(props: SelectBodyPropsType) {

    const onClickHandler = (event: any) => {
        props.callbackSelectValue(event.currentTarget.innerHTML)
        props.onClickCollapsed()
    }

    return (
        <ul>
            {props.items.map((i, index) => <li key={index} onClick={onClickHandler}>{i.title}</li>)}
        </ul>
    )
}