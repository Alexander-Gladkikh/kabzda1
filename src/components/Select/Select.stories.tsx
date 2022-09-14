import React, {useState} from "react";
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select',
    component: Select,
}

const items = [
        {title: 'Dima', value: 1},
        {title: 'Valera', value: 2},
        {title: 'Margo', value: 3},
        {title: 'Sasha', value: 4},
    ]

const callback = () => action('click');

export const SelectCollapsedMode = () => <Select onBlurCollapsed={callback} selectValue={'no-name'}
                                                 onClickCollapsed={callback} onChange={callback}
                                                 items={items}
                                                 select={false}/>
export const SelectUnCollapsedMode = () => <Select onBlurCollapsed={callback} selectValue={'no-name'}
                                                   onClickCollapsed={callback} onChange={callback}
                                                   items={items}
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
                items={items}/>
    )
}

