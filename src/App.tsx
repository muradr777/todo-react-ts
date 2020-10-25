import React from 'react';
import './App.css';

// Lib-Components
import { Container, Content } from 'rsuite';

// Structure
import Navi from './components/Navi';
import Foot from './components/Foot';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <Container>
        <Navi />

        <Content className='content'>
          <div className='wrapper'>
            <h1 className='list-title'>Todo List</h1>
            <TodoList  />
          </div>
        </Content>
        
        <Foot/>

      </Container> 
    </div>
  );
}

export default App;
