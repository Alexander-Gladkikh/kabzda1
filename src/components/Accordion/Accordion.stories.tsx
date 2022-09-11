import React, {useState} from "react";
import Accordion from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion',
    component: Accordion,
};

const callback = action('accordion mode change event fired');

export const MenuCollapsedMode = () => <Accordion collapsed={true} onClick={callback} items={[]}/>;
export const MenuUnCollapsedMode = () => <Accordion collapsed={false} onClick={callback} items={['Dima', 'Valera']}/>;

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion collapsed={value} items={['Dima', 'Valera']} onClick={() => setValue}/>
}