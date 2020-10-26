import React from 'react';

export const data: Array<{id: number, title: string, checked: boolean}> = [
    {'id': 0, 'title': 'Alalalala', 'checked': false}
];

const LocaleContext = React.createContext<object>(data);

export default LocaleContext;