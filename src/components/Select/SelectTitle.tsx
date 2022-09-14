import React from "react";
import s from './Selected.module.css'

type SelectTitlePropsType = {
 selectValue: string | undefined
 onClickCollapsed: () => void
}

export function SelectTitle(props: SelectTitlePropsType) {
 return (
     <h2 className={s.selectTitle} onClick={props.onClickCollapsed} >{props.selectValue}</h2>
 )
}