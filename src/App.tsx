import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating, RatingType} from './components/Rating/Rating';
import {OnOff} from './components/onOff/OnOff';
import {UnControlledAccordion} from './components/UnControlledAccordion/UnControlledAccordion';
import {UnControlledRating} from './components/UnControlledRating/UnControlledRating';
import {UnControlledOnOff} from './components/UncontrolledOnOff/UnControlledOnOff';
import {Select} from "./components/Select/Select";
import {string} from "prop-types";
import {Select2} from "./components/Select2/Select2";

export type ItemsType = {
    value: number
    title: string
}

function App() {
    console.log('App rendering')
    const items = [
        {value: 1, title: 'Ann'},
        {value: 2, title: 'Bob'},
        {value: 3, title: 'Kris'}
    ]

    const [ratingValue, setRatingValue] = useState<RatingType>(0)
    const [collapsed, setCollapsed] = useState(false)
    const [on, setOn] = useState(false)

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [selectedOption, setSelectedOption] = useState<null | ItemsType>(null);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: ItemsType) => {
        setSelectedOption(option);
        setIsOpen(false);
    };
    return (
        <div>
            {/*<AppTitle title={'This is App component'}/>
            <AppTitle title={'Hello'}/>

            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion titleValue={'Menu'} items={items} collapsed={collapsed}
                       onClick={() => setCollapsed(!collapsed)}
                       onItemClick={() => alert(1)}/>
            <OnOff on={on} onClick={setOn}/>

            <UnControlledAccordion titleValue={'Menu3'}/>
            <UnControlledRating/>
            <UnControlledOnOff/>
            <Select
                items={items}
                handleToggle={handleToggle}
                handleOptionClick={handleOptionClick}
                selectedOption={selectedOption}
                isOpen={isOpen}
            />
            <Select2 value={2} onClick={() => {}} items={items}/>*/}
            <UnControlledAccordion titleValue={'Menu3'}/>
        </div>
    );
}

type AppTitlePropsType = {
    title: string
}

function AppTitle(props: AppTitlePropsType) {
    console.log('AppTitle rendering')
    return (
        <h2>{props.title}</h2>
    );
}


export default App;
