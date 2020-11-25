import React, { useState } from 'react'
import SearchWIKI from './components/SearchWIKI'
import Accordion from './components/Accordion'
import Dropdown from './components/Dropdown'
import Translate from './components/Translation/Translate'


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
    
    return (
        <div>
            <Translate />
        </div>
    );
    

    /* DROPDOWN
        
    const [selection, setSelection] = useState(DropdownOptions[0]);
    const [showDropdown, setShowDropdown] = useState(false);

    
    return (
        <div>
            <button 
                onClick={() => setShowDropdown(!showDropdown)}
                style={{ margin:'5px' }}
            >
                {
                    showDropdown ? 'Hide dropdown' : 'Show dropdown'
                }
            </button>
            {           
                showDropdown ?  
                <Dropdown 
                    label="Select a color" 
                    selection={selection} 
                    onSelectedChange={setSelection} 
                    options={DropdownOptions}
                /> : null
            }
        </div>
    );
    */
}