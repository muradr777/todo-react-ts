import React, { useState, useContext } from 'react';

// RSuite Components
import { Form, InputGroup, Input, Icon, List, Divider } from 'rsuite';

// Custom Components
import ListItems from './ListItems';

import ListContext from '../ListContext';

const TodoList = () => {
    const { data, setData } = useContext(ListContext);
    const [inputVal, setInputVal] = useState<string>('');

    const generateId = () : number => {
        let maxID = 0;
    
        data.map(item => {
            maxID = item.id > maxID ? item.id : maxID;
        })

        return maxID+1;
    }

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
        <>
            <Form onSubmit={handleSubmit}>
                <InputGroup className='input--group'>
                    <Input onChange={handleInput} value={inputVal} placeholder='Please enter the note' />
                </InputGroup>
            </Form>
            
            <List className='list-body' hover>
                <ListItems checked={false} />
                <Divider>DONE</Divider>
                <ListItems checked={true} />
            </List>
        </>
    );
}

export default TodoList;