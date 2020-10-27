// __tests__/fetch.test.js
import React from 'react';
import App from './App';
import { fireEvent, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {debug} from 'console';



test('Add new todo', async () => {
    let todoContent = 'this is test todo';

    const { getByText, getByTestId, getByPlaceholderText, debug } = render(<App />);

    userEvent.type(getByPlaceholderText('Please enter the note'), todoContent);

    fireEvent.submit(getByTestId('input-form'));
    
    await waitFor(() => expect(getByText(todoContent)).toBeDefined());
})
