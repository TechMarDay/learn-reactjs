// import './App.css';
import React from 'react';
import { Link, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album'

function App() {
  return (
    <div className="App">
      Header
      <p><NavLink to="/todolist" activeClassName="active-menu">Todos</NavLink></p>
      <p><NavLink to="/albums">Albums</NavLink></p>
      <Switch>
        <Redirect from="/home" to="/" exact />
        <Redirect from="/post-list/:postId" to="/posts/:postId" exact />

        <Route path="/" component={TodoFeature} exact />
        <Route path="/todolist" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
      </Switch>
      Footer
    </div >
  );
}

export default App;
