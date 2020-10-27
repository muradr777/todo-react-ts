import React, { useState } from 'react';
import './App.css';

// Context API
import ListContext from './ListContext';

// Lib-Components
import { Container, Content } from 'rsuite';

// Structure
import Navi from './components/Navi';
import Foot from './components/Foot';
import TodoList from './components/TodoList';

const App = () => {
  const [data, setData] = useState<{id: number, title: string, checked: boolean}[]>([
    {'id': 0, 'title': 'Roses are red', 'checked': false},
    {'id': 1, 'title': 'Violets are blue', 'checked': true},
    {'id': 2, 'title': 'Sugar is sweet', 'checked': false},
    {'id': 3, 'title': 'And so are you', 'checked': true}
  ]);

  return (
    <div className="App">
      <Container>
        <Navi />

        <Content className='content'>
          <div className='wrapper'>
            <h1 className='list-title'>Todo List</h1>
            <ListContext.Provider value={{ data, setData }}>
              <TodoList />
            </ListContext.Provider>
          </div>
        </Content>
        
        <Foot/>

      </Container> 
    </div>
  );
}

export default App;
