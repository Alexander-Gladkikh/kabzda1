import React, {useState} from "react";

type ItemType = {
    title: string
    value: any
}

type SelectedPropsType = {
    onChange: (value: any) => void
    select: boolean
    items: ItemType[]
    onClickCollapsed: () => void
    selectValue: any
    onBlurCollapsed: () => void
}

export function Select(props: SelectedPropsType) {

    const onClickCollapsed = () => {
        props.onClickCollapsed()
    }

    const onBlurCollapsed = () => {
        props.onBlurCollapsed()
    }

    return (
        <div>
            <div onClick={onClickCollapsed} onDoubleClick={onBlurCollapsed}>{props.selectValue}</div>
            {props.select && <SelectBody items={props.items} callbackSelectValue={props.onChange}/>}

        </div>
    )
}

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
