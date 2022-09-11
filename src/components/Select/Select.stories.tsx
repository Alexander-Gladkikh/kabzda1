import React, {useState} from "react";
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select',
    component: Select,
}

const callback = () => action('click');

export const SelectCollapsedMode = () => <Select onBlurCollapsed={callback} selectValue={callback} onClickCollapsed={callback} onChange={callback}
                                                 items={
                                                     [
                                                         {title: 'Dima', value: 1},
                                                         {title: 'Valera', value: 2},
                                                         {title: 'Margo', value: 3},
                                                         {title: 'Sasha', value: 4},
                                                     ]}
                                                 select={false}/>
export const SelectUnCollapsedMode = () => <Select onBlurCollapsed={callback} selectValue={callback} onClickCollapsed={callback} onChange={callback}
                                                   items={
                                                       [
                                                           {title: 'Dima', value: 1},
                                                           {title: 'Valera', value: 2},
                                                           {title: 'Margo', value: 3},
                                                           {title: 'Sasha', value: 4},
                                                       ]}
                                                   select={true}/>

export const SelectChanging = () => {
    const [select, setSelect] = useState<boolean>(false)
    const [selectValue, setSelectValue] = useState('no-name')

    const callbackSelectValue = (value: string) => {
        setSelectValue(value)
    }

    const onClickCollapsed = () => {
        setSelect(!select)
    }

    const onBlurCollapsed = () => {
        select && setSelect(false)
    }

    return (
        <Select onBlurCollapsed={onBlurCollapsed} selectValue={selectValue} onClickCollapsed={onClickCollapsed}
            onChange={callbackSelectValue}
            select={select}
            items={
            [
                {title: 'Dima', value: 1},
                {title: 'Valera', value: 2},
                {title: 'Margo', value: 3},
                {title: 'Sasha', value: 4},
            ]}/>
    )
}

