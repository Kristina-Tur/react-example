import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating, RatingType} from './components/Rating/Rating';
import {OnOff} from './components/onOff/OnOff';
import {UnControlledAccordion} from './components/UnControlledAccordion/UnControlledAccordion';
import {UnControlledRating} from './components/UnControlledRating/UnControlledRating';
import {UnControlledOnOff} from './components/UncontrolledOnOff/UnControlledOnOff';


function App() {
    console.log('App rendering')

    const [ratingValue, setRatingValue] = useState<RatingType>(0)
    const [collapsed, setCollapsed] = useState(false)
    const [on, setOn] = useState(false)
    return (
        <div>
            <AppTitle title={'This is App component'}/>
            <AppTitle title={'Hello'}/>

            <Rating value={ratingValue} onClick = {setRatingValue}/>
            <Accordion titleValue={'Menu'} collapsed={!collapsed} onClick={() => setCollapsed(collapsed)}/>
            <OnOff on={on} onClick={setOn}/>

            <UnControlledAccordion titleValue={'Menu3'}/>
            <UnControlledRating/>
            <UnControlledOnOff/>
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
