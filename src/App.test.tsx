// __tests__/fetch.test.js
import React from 'react';
import TodoList from './components/TodoList';
import { render, cleanup, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { debug } from 'console';

afterEach(cleanup);

test('Delete selected todo', async () => {
  const { getByTestId, debug } = render( <TodoList /> );

  const deleteButton = getByTestId('delete-button');

  fireEvent.click(deleteButton);

  // await waitFor(() => )
  debug();
})
