import React from "react";

export type RatingValueType = 1 | 2 | 3 | 4

type RatingPropsType = {
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

function Rating (props: RatingPropsType) {
    return  (
        <div>
            <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
            <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
            <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
            <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    value: RatingValueType
    onClick: (ratingValue: RatingValueType) => void
}

const Star = (props: StarPropsType) => {
    return <span onClick={() => { props.onClick(props.value) }
    }>
            {props.selected ? <b>star </b> : 'star '}
        </span>
}

export default Rating