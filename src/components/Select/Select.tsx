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
    selectValue: string | undefined
    onBlurCollapsed: () => void
}

export function Select(props: SelectedPropsType) {

    const onClickCollapsed = () => {
        props.onClickCollapsed()
    }


    return (
        <>
            <select>
                <option value="1">Moscow</option>
                <option value="2">Minsk</option>
            </select>
        <div tabIndex={0} onBlur={props.onBlurCollapsed}>
            <SelectTitle
                selectValue={props.selectValue}
                onClickCollapsed={onClickCollapsed}
                />
            {props.select && <SelectBody
                items={props.items}
                callbackSelectValue={props.onChange}
                onClickCollapsed={onClickCollapsed}/>}

        </div>
        </>
    )
}




