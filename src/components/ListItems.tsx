import React from 'react';
import { List, Checkbox } from 'rsuite';

const ListItems = ({data, handleClick, checked}: any) => {
    let classList = 'list-item' + (checked ? ' done' : '');
    
    return (
        <React.Fragment>
            {data.map((item: any, index: number) => (
                checked === item.checked ? (
                    <List.Item className={classList} key={item.id} index={item.id}>
                        <Checkbox onChange={() => handleClick(index)} defaultChecked={checked}>{item.title}</Checkbox>
                    </List.Item>
                ) : ''
            ))}
        </React.Fragment>        
    )
}

export default ListItems;