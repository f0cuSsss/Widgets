import React, { useState } from 'react'
import SearchWIKI from './components/SearchWIKI'
import Accordion from './components/Accordion'
import Dropdown from './components/Dropdown'
import Translate from './components/Translation/Translate'
import Header from './components/Navigation/Header'
import Route from './components/Navigation/Route'
import SearchWIKi from './components/SearchWIKI'


const AccordionItems = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
];


const DropdownOptions = [
    {
        label: 'Red',
        value: 'red'
    },
    {
        label: 'Green',
        value: 'green'
    },
    {
        label: 'Blue',
        value: 'blue'
    }
];

export default () => { 
    const [selected, setSelected] = useState(DropdownOptions[0]);

    return (
        <div>
            <Header />

            <Route path="/">
                <Accordion items={AccordionItems}/>
            </Route>
            <Route path="/wiki">
                <SearchWIKi />
            </Route>
            <Route path="/dropdown">
                <Dropdown 
                    label="Select a color"
                    selected={selected}
                    onSelectedChange={setSelected}
                    options={DropdownOptions}
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
    
}