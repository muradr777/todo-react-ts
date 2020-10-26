import React, { useContext } from 'react';
import { List, Checkbox, FlexboxGrid, Icon, IconButton } from 'rsuite';

import ListContext from '../ListContext';

const ListItems = ({checked}: any) => {
    let classList = 'list-item' + (checked ? ' done' : '');

    const {data, setData} = useContext( ListContext );
    
    const handleCheck = (idx: number) : void => {
        setData([
            {id: data[idx].id, title: data[idx].title, checked: !data[idx].checked},
            ...data.filter((val, index) => index != idx)
        ]);
    };

    const deleteListItem = (id: number) : void => 
        setData([...data.filter((val, index) => index != id)]);

    return (
        <ListContext.Consumer>
            {({data}: any) => data.map((item: any, index: number) => (
                checked === item.checked ? (
                        <List.Item className={classList} key={item.id} index={item.id}>
                            <FlexboxGrid align='middle' justify='space-between'>
                                <Checkbox onChange={() => handleCheck(index)} defaultChecked={checked}>{item.title}</Checkbox>
                                <IconButton size='xs' onClick={() => deleteListItem(index)} icon={<Icon icon='close' />} data-testid='delete-button' />
                            </FlexboxGrid>
                        </List.Item>                    
                ) : ''
            ))}
        </ListContext.Consumer>        
    )
}

export default ListItems;