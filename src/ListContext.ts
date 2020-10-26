import React from 'react';

export type dataType = Array<{id: number, title: string, checked: boolean}>;

export const defaultData: dataType = [];

export type ListContextType = {
    data: dataType;
    setData: (dataType: dataType) => void;
} 

const ListContext = React.createContext<ListContextType>({ data: defaultData, setData: (defaultData: dataType) => console.warn('No data provided!')});

export default ListContext;