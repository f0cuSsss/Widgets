import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Convert = ({ language, text }) => {
    const [translated, setTranslated] = useState('');
    const [debounceText, setDebounceText] = useState('');

    useEffect(() => {
        const timerId = setTimeout(() => {
                setDebounceText(text);
            }, 700);

        return () => {
            clearTimeout(timerId);
        };

    }, [text]);

    useEffect(() => {
        const doTranslation = async () => {
            const { data } = await axios.post(
                'https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: debounceText,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            });

            setTranslated(data.data.translations[0].translatedText);
        }

        doTranslation();
    }, [language, debounceText]);



    return (
        <div>
            <label>Output:</label>
            <br/>
            <h2 className="h2">{translated}</h2>
        </div>
    );
}

export default Convert;