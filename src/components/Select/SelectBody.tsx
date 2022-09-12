import React from "react";
import {ItemType} from "./Select";

type SelectBodyPropsType = {
    items: ItemType[]
    callbackSelectValue: (value: string) => void
}

export function SelectBody(props: SelectBodyPropsType) {

    const onClickHandler = (event: any) => {
        props.callbackSelectValue(event.currentTarget.innerHTML)
        // console.log(event.currentTarget.innerHTML)
    }

    return (
        <>
            {props.items.map(i => <div onDoubleClick={onClickHandler}>{i.title}</div>)}
        </>
    )
}