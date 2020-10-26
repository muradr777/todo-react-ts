import React from 'react';
import { List, Checkbox } from 'rsuite';

import LocaleContext from '../LocaleContext';

const ListItems = ({handleClick, checked}: any) => {
    let classList = 'list-item' + (checked ? ' done' : '');
    
    return (
        <LocaleContext.Consumer>
            {(data: any) => data.map((item: any, index: number) => (
                checked === item.checked ? (
                    <List.Item className={classList} key={item.id} index={item.id}>
                        {<Checkbox onChange={() => handleClick(index)} defaultChecked={checked}>{item.title}</Checkbox>}
                    </List.Item>
                ) : ''
            ))}
        </LocaleContext.Consumer>        
    )
}

export default ListItems;