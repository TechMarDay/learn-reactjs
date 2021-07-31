// import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album'

function App() {
  return (
    <div className="App">
      Home page
      <Route path="/todos" components={TodoFeature} />
      <Route path="/albums" components={AlbumFeature} />

      {/* <AlbumFeature />
      <TodoFeature /> */}
    </div >
  );
}

export default App;
