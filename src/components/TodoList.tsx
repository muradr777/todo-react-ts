import React, { useState } from 'react';

// RSuite Components
import { Form, InputGroup, Input, Icon, List, Divider } from 'rsuite';

// Custom Components
import ListItems from './ListItems';

const TodoList = () => {
    const [inputVal, setInputVal] = useState<string>('');
    const [data, setData] = useState<{id: number, title: string, checked: boolean}[]>([
        {'id': 0, 'title': 'Roses are red', 'checked': false},
        {'id': 1, 'title': 'Violets are blue', 'checked': true},
        {'id': 2, 'title': 'Sugar is sweet', 'checked': false},
        {'id': 3, 'title': 'And so are you', 'checked': true}
    ]);

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

    const handleCheck = (idx: number) : void => {
        setData([
            {id: data[idx].id, title: data[idx].title, checked: !data[idx].checked},
            ...data.filter((val, index) => index != idx)
        ]);
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <InputGroup className='input--group'>
                    <Input onChange={handleInput} value={inputVal} placeholder='Please enter the note' />
                    <InputGroup.Button>
                        <Icon icon="send-o" />
                    </InputGroup.Button>
                </InputGroup>
            </Form>
            
            <List className='list-body' hover>
                <ListItems data={data} handleClick={handleCheck} checked={false} />
                <Divider>DONE</Divider>
                <ListItems data={data} handleClick={handleCheck} checked={true} />
            </List>
        </>
    );
}

export default TodoList;