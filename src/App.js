import React from 'react'
import SearchWIKI from './components/SearchWIKI'
import Accordion from './components/Accordion'


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
]

export default () => {
    return (
        <div>
            <br/>
            <Accordion items={AccordionItems}/>
        </div>
    );
}