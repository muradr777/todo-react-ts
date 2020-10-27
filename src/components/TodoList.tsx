import React from 'react';

// RSuite Components
import { List, Divider } from 'rsuite';

// Custom Components
import ListItem from './ListItem';

const TodoList = () => {
    return (
        <List className='list-body' hover>
            <ListItem checked={false} />
            <Divider>DONE</Divider>
            <ListItem checked={true} />
        </List>
    );
}

export default TodoList;