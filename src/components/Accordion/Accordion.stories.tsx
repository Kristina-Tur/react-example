import {action} from '@storybook/addon-actions';

import {Accordion} from './Accordion';
import React, {useState} from 'react';

/*const meta: Meta<typeof Accordion> = {
    component: Accordion,
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const FirstStory: Story = {
    args: {
        titleValue: 'hello',
        collapsed: true
    }
};*/

export default {
    component: Accordion,
};

const onClickHandler = action('onClick')
const onItemClick = action('onItemClick')

export const CollapsedAccordion = () => {
    return <Accordion titleValue={'Collapsed Accordion'} collapsed={true} onClick={onClickHandler} items={[]}
    onItemClick={onItemClick}/>
}

export const OpenedAccordion = () => {
    return <Accordion
        titleValue={'Opened Accordion'}
        collapsed={false}
        onClick={onClickHandler}
        items={[{value: 1, title: 'Ann'}, {value: 2, title: 'Bob'}, {value: 3, title: 'Kris'}]}
        onItemClick={onItemClick}
    />
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion
        titleValue={'AccordionDemo'}
        collapsed={collapsed}
        onClick={() => {setCollapsed(!collapsed)}}
        items={[{value: 1, title: 'Ann'}, {value: 2, title: 'Bob'}, {value: 3, title: 'Kris'}]}
        onItemClick={onItemClick}
    />
}