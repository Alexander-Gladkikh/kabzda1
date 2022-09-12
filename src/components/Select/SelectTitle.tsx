import React from "react";

type SelectTitlePropsType = {
 selectValue: any
 onClickCollapsed: () => void
 onBlurCollapsed: () => void
}

export function SelectTitle(props: SelectTitlePropsType) {
 return (
     <h2 onClick={props.onClickCollapsed} onBlur={props.onBlurCollapsed}>{props.selectValue}</h2>
 )
}