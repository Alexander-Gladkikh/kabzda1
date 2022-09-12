import React, {useState} from "react";
import {SelectBody} from "./SelectBody";
import {SelectTitle} from "./SelectTitle";

export type ItemType = {
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
            <SelectTitle selectValue={props.selectValue} onClickCollapsed={onClickCollapsed} onBlurCollapsed={onBlurCollapsed}/>
            {props.select && <SelectBody items={props.items} callbackSelectValue={props.onChange}/>}

        </div>
    )
}




