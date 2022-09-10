import React from 'react';

type onOffPropsType = {
    switcher: () => void
    state: boolean
}

const OnOff = (props: onOffPropsType) => {
    const onClickHandler = () => {
        props.switcher()
    }
    let colorBackground = props.state ? 'red' : 'black';
    return (
        <div style={{display: 'flex', justifyContent: 'space-between', padding: '100px'}}>
            <div style={{width: '100px', height: '100px',border: '1px solid black', backgroundColor: colorBackground}}>
                <p>{props.state ? 'on' : 'off'}</p>
            </div>

            <div style={{width: '100px', height: '100px', borderRadius: '50%', border: '1px solid black'}}
            onClick={onClickHandler}>
                <p></p>
            </div>
        </div>
    );
};

export default OnOff;