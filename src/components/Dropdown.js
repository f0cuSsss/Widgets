import React, { useState, useEffect, useRef } from 'react'

const Dropdown = ({ text, selection, onSelectionChange, options }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    
    useEffect(() => {
        const onBodyClick = e => {
            if(ref.current && ref.current.contains(e.target)) {
                return;
            }

            setOpen(false);
        }

        document.body.addEventListener('click', onBodyClick);

        return () => {
            document.body.removeEventListener('click', onBodyClick);
        }

    }, []);

    const renderedOptions = options.map(option => {
        if(selection.label === option.label)
                return;

        return (
            <div 
                className="item" 
                key={option.value}
                onClick={() => onSelectionChange(option)}
            >
                {option.label}
            </div>
        );
    });

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{text}</label>
                <div 
                    className={`ui selection dropdown ${open ? `visible active` : ''}`}
                    onClick={() => setOpen(!open)}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selection.label}</div>
                    <div className={`menu ${open ? `visible transition` : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dropdown;