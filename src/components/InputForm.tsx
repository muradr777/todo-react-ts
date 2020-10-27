import React, { useState, useContext } from 'react';
import { Form, InputGroup, Input } from 'rsuite';

import ListContext from '../ListContext';

const InputForm = ({generateId}: any) => {
    const {data, setData} = useContext( ListContext );
    const [inputVal, setInputVal] = useState<string>('');

    const handleSubmit = () => {
        if(inputVal.length !== 0)
            setData([
                ...data,
                { 'id': generateId(), 'title': inputVal, 'checked': false },
            ])
        
        setInputVal('');
    };

    const handleInput = (value: string) => setInputVal(value);

    return (
        <Form data-testid='input-form' onSubmit={handleSubmit}>
            <InputGroup className='input--group'>
                <Input onChange={handleInput} value={inputVal} placeholder='Please enter the note' />
            </InputGroup>
        </Form>
    )
}

export default InputForm;
