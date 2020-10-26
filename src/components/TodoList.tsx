import React, { useState, useContext } from 'react';

// RSuite Components
import { Form, InputGroup, Input, Icon, List, Divider } from 'rsuite';

// Custom Components
import FormItem from './FormItem';
import ListItems from './ListItems';

import ListContext from '../ListContext';

const TodoList = () => {
    const { data, setData } = useContext(ListContext);

    const generateId = () : number => {
        let maxID = 0;
    
        data.map(item => {
            maxID = item.id > maxID ? item.id : maxID;
        })

        return maxID+1;
    }

    

    return (
        <>
            <FormItem generateId={generateId} />
            
            <List className='list-body' hover>
                <ListItems checked={false} />
                <Divider>DONE</Divider>
                <ListItems checked={true} />
            </List>
        </>
    );
}

export default TodoList;